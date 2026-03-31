import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from "@assets/EyeCaringEquipments_1774958046472.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[900px] bg-white/85 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-6 py-2 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Eye Caring Equipments" className="h-14 w-auto object-contain drop-shadow-sm" />
          <span className="font-semibold text-lg text-foreground tracking-tight hidden sm:block">
            Eye Caring Equipments
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>
          <Link href="/products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Products</Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+918882591713" className="flex items-center justify-center bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <a href="https://wa.me/918882591713" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-[#25D366]/10 text-[#25D366] p-2 rounded-full hover:bg-[#25D366]/20 transition-colors">
            <FaWhatsapp className="w-4 h-4" size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground/80"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 backdrop-blur-md border border-white/50 shadow-lg rounded-3xl md:hidden flex flex-col gap-4">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded-xl" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded-xl" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/products" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded-xl" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded-xl" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
