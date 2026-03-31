import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Hi, I would like to inquire about the ${product.name}.`);
  const whatsappUrl = `https://wa.me/918882591713?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <div className="aspect-square bg-muted/30 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mt-auto pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-medium px-4 py-2.5 rounded-xl transition-colors duration-300 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
