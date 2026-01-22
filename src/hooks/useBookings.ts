import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

export type Booking = Tables<"bookings">;
export type CreateBookingData = Omit<TablesInsert<"bookings">, "user_id" | "id" | "created_at" | "updated_at" | "status">;

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchBookings = useCallback(async () => {
    if (!user) {
      setBookings([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const createBooking = async (bookingData: CreateBookingData) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to make a booking",
        variant: "destructive",
      });
      return null;
    }

    try {
      const { data, error } = await supabase
        .from("bookings")
        .insert({
          ...bookingData,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      await fetchBookings();
      toast({
        title: "Booking created!",
        description: "Your booking has been submitted successfully",
      });
      return data;
    } catch (error) {
      console.error("Error creating booking:", error);
      toast({
        title: "Booking failed",
        description: "Failed to create booking. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  const cancelBooking = async (bookingId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" as const })
        .eq("id", bookingId)
        .eq("user_id", user.id);

      if (error) throw error;

      await fetchBookings();
      toast({
        title: "Booking cancelled",
        description: "Your booking has been cancelled",
      });
      return true;
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast({
        title: "Error",
        description: "Failed to cancel booking",
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    bookings,
    loading,
    createBooking,
    cancelBooking,
    refetch: fetchBookings,
  };
}
