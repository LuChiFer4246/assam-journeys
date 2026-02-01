export interface Product {
  id: string;
  name: string;
  shopName: string;
  artisanName: string;
  location: string;
  priceRange: string;
  category: "handicraft" | "textile" | "food" | "art" | "souvenir";
  image: string;
  story: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Muga Silk Mekhela Chador",
    shopName: "Sualkuchi Silk House",
    artisanName: "Pranjal Bora",
    location: "Sualkuchi, Kamrup",
    priceRange: "₹5,000 - ₹15,000",
    category: "textile",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
    story: "Handwoven by artisans in Sualkuchi, the silk village of Assam. Each piece takes weeks to create using traditional techniques passed down through generations."
  },
  {
    id: "2",
    name: "Bell Metal Utensils",
    shopName: "Sarthebari Crafts",
    artisanName: "Hemanta Das",
    location: "Sarthebari, Barpeta",
    priceRange: "₹500 - ₹3,000",
    category: "handicraft",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    story: "Traditional bell metal craft from Sarthebari, famous for its unique ringing sound and durability. These utensils are made using ancient casting methods."
  },
  {
    id: "3",
    name: "Assam Orthodox Tea",
    shopName: "Jorhat Tea Estate",
    artisanName: "Local Farmers Collective",
    location: "Jorhat, Upper Assam",
    priceRange: "₹200 - ₹800",
    category: "food",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    story: "Premium orthodox tea leaves hand-picked from the lush gardens of Jorhat. Each batch is processed with care to preserve the authentic Assam flavor."
  },
  {
    id: "4",
    name: "Bamboo Craft Set",
    shopName: "Diphu Bamboo Works",
    artisanName: "Karbi Anglong Artisans",
    location: "Diphu, Karbi Anglong",
    priceRange: "₹300 - ₹2,000",
    category: "handicraft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    story: "Eco-friendly bamboo crafts made by skilled artisans from the Karbi Anglong hills. Each piece reflects the rich tribal heritage of the region."
  },
  {
    id: "5",
    name: "Terracotta Pottery",
    shopName: "Dhubri Clay Arts",
    artisanName: "Kumar Family",
    location: "Dhubri, Lower Assam",
    priceRange: "₹150 - ₹1,500",
    category: "art",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400",
    story: "Traditional terracotta pottery shaped by the Kumar family for over five generations. Each piece is sun-dried and kiln-fired using age-old techniques."
  },
  {
    id: "6",
    name: "Jaapi Hat",
    shopName: "Traditional Crafts Assam",
    artisanName: "Bimal Nath",
    location: "Nalbari",
    priceRange: "₹400 - ₹1,200",
    category: "souvenir",
    image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=400",
    story: "The iconic Jaapi is a symbol of Assamese culture. Made from bamboo and palm leaves, it represents the agrarian heritage of the state."
  },
  {
    id: "7",
    name: "Eri Silk Shawl",
    shopName: "Sualkuchi Weavers Coop",
    artisanName: "Rupali Deka",
    location: "Sualkuchi, Kamrup",
    priceRange: "₹2,000 - ₹8,000",
    category: "textile",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    story: "Eri silk, also known as 'peace silk', is made without harming the silkworm. These shawls are woven by women artisans preserving this ethical tradition."
  },
  {
    id: "8",
    name: "Cane Furniture Set",
    shopName: "Nagaon Cane Crafts",
    artisanName: "Ramen Bora",
    location: "Nagaon",
    priceRange: "₹3,000 - ₹25,000",
    category: "handicraft",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    story: "Handcrafted cane furniture made by skilled artisans in Nagaon. Each piece is designed for durability while showcasing intricate weaving patterns."
  },
  {
    id: "9",
    name: "Assamese Gamosa",
    shopName: "Handloom Hub",
    artisanName: "Multiple Weavers",
    location: "Guwahati",
    priceRange: "₹150 - ₹600",
    category: "textile",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    story: "The Gamosa is a symbol of Assamese identity and hospitality. Each piece features the traditional red border on white cotton, handwoven with pride."
  },
  {
    id: "10",
    name: "Pitha Mix Box",
    shopName: "Assam Gourmet",
    artisanName: "Local Women's SHG",
    location: "Sivasagar",
    priceRange: "₹250 - ₹500",
    category: "food",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    story: "Traditional Assamese rice cake mix prepared by self-help groups in Sivasagar. Perfect for making authentic Til Pitha and Ghila Pitha at home."
  },
  {
    id: "11",
    name: "Xorai (Traditional Offering Tray)",
    shopName: "Sarthebari Heritage",
    artisanName: "Mohan Das",
    location: "Sarthebari, Barpeta",
    priceRange: "₹800 - ₹5,000",
    category: "handicraft",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=400",
    story: "The Xorai is a sacred offering tray used in Assamese ceremonies. Handcrafted in bell metal, it symbolizes respect and hospitality."
  },
  {
    id: "12",
    name: "Mask Art (Mukha)",
    shopName: "Majuli Mask Studio",
    artisanName: "Sattriya Artists",
    location: "Majuli Island",
    priceRange: "₹1,000 - ₹10,000",
    category: "art",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400",
    story: "Traditional masks used in Sattriya performances, handcrafted by artists on Majuli Island. Each mask tells a story from Hindu mythology."
  }
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "handicraft", label: "Handicrafts" },
  { value: "textile", label: "Textiles" },
  { value: "food", label: "Food & Beverages" },
  { value: "art", label: "Art & Decor" },
  { value: "souvenir", label: "Souvenirs" }
];

export const locations = [
  { value: "all", label: "All Locations" },
  { value: "sualkuchi", label: "Sualkuchi" },
  { value: "sarthebari", label: "Sarthebari" },
  { value: "jorhat", label: "Jorhat" },
  { value: "diphu", label: "Diphu" },
  { value: "guwahati", label: "Guwahati" },
  { value: "majuli", label: "Majuli" },
  { value: "sivasagar", label: "Sivasagar" }
];
