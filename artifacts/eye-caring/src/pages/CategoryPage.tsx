import React, { useMemo } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";

export default function CategoryPage() {
  const [match, params] = useRoute("/products/:slug");
  const slug = params?.slug;

  const category = useMemo(() => {
    return productsData.find(c => c.slug === slug);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link href="/products" className="text-primary hover:underline">Return to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{category.name}</span>
          </div>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {category.description}
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
