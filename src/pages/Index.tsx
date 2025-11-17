import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const Index = () => {
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    brand: [],
    priceRange: [0, 50000]
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts filters={filters} setFilters={setFilters} />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;
