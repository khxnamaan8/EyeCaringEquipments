import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { productsData } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Equipment Categories</h1>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive range of high-end ophthalmic instruments designed for modern clinical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${category.slug}`} className="group block h-full">
                  <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                    
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{category.name}</h2>
                      <p className="text-muted-foreground mb-8">{category.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {category.products.slice(0, 2).map(prod => (
                          <div key={prod.id} className="bg-background rounded-xl p-4 aspect-square flex items-center justify-center border border-border group-hover:border-primary/20 transition-colors">
                            <img src={prod.image} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto inline-flex items-center gap-2 text-primary font-medium">
                      View full category <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
