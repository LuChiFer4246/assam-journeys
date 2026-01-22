import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export interface WishlistItem {
  id: string;
  place_id: string;
  place_name: string;
  place_image: string | null;
  place_category: string | null;
  created_at: string;
}

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchWishlist = useCallback(async () => {
    if (!user) {
      setItems([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("wishlists")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const addToWishlist = async (place: {
    id: string;
    name: string;
    image?: string;
    category?: string;
  }) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save places to your wishlist",
        variant: "destructive",
      });
      return false;
    }

    try {
      const { error } = await supabase.from("wishlists").insert({
        user_id: user.id,
        place_id: place.id,
        place_name: place.name,
        place_image: place.image || null,
        place_category: place.category || null,
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already saved",
            description: "This place is already in your wishlist",
          });
          return false;
        }
        throw error;
      }

      await fetchWishlist();
      toast({
        title: "Added to wishlist",
        description: `${place.name} has been saved`,
      });
      return true;
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast({
        title: "Error",
        description: "Failed to add to wishlist",
        variant: "destructive",
      });
      return false;
    }
  };

  const removeFromWishlist = async (placeId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from("wishlists")
        .delete()
        .eq("user_id", user.id)
        .eq("place_id", placeId);

      if (error) throw error;

      setItems((prev) => prev.filter((item) => item.place_id !== placeId));
      toast({
        title: "Removed from wishlist",
        description: "Place has been removed from your wishlist",
      });
      return true;
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      toast({
        title: "Error",
        description: "Failed to remove from wishlist",
        variant: "destructive",
      });
      return false;
    }
  };

  const isInWishlist = (placeId: string) => {
    return items.some((item) => item.place_id === placeId);
  };

  const toggleWishlist = async (place: {
    id: string;
    name: string;
    image?: string;
    category?: string;
  }) => {
    if (isInWishlist(place.id)) {
      return removeFromWishlist(place.id);
    } else {
      return addToWishlist(place);
    }
  };

  return {
    items,
    loading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    refetch: fetchWishlist,
  };
}
