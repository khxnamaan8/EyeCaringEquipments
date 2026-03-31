import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918882591713"
      target="_blank"
      rel="noreferrer"
      data-testid="button-whatsapp-float"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.6)] transition-shadow duration-300"
      style={{ width: 60, height: 60, background: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.12, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "rgba(37,211,102,0.35)" }}
      />
      {/* WhatsApp official icon */}
      <FaWhatsapp size={32} color="#ffffff" style={{ position: "relative", zIndex: 10 }} />
    </motion.a>
  );
}
