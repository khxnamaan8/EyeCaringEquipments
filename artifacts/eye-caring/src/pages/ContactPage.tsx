import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSEO } from "@/hooks/useSEO";

export default function ContactPage() {
  useSEO({
    title: "Contact Us — Buy Ophthalmic Equipment Delhi",
    description: "Get in touch with Eye Caring Equipments. Visit us at 27 East Laxmi Market, Delhi-110092, call +91 8882591713 or WhatsApp for pricing and product enquiries.",
    canonical: "https://eyecaringequipments.com/contact",
    keywords: "contact Eye Caring Equipments, buy ophthalmic equipment Delhi, ophthalmology instruments price, eye equipment supplier contact",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to answer your questions and provide the best equipment solutions for your practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>

              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    27 East Laxmi Market, Street No.1<br />
                    Near Shiv Mandir<br />
                    Delhi-110092
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">Speak directly with our sales and support team.</p>
                  <a href="tel:+918882591713" className="text-lg font-bold text-primary hover:underline">+91 8882591713</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#25D366]/30 shadow-sm flex items-start gap-5 hover:border-[#25D366] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-bl-full -z-10"></div>
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Fastest way to get quotes and product catalogs.</p>
                  <a 
                    href="https://wa.me/918882591713" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full min-h-[400px]"
            >
              <div className="bg-white rounded-3xl p-2 border border-border shadow-md h-full overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3533479603094!2d77.2798284!3d28.6324838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac72cd1dd5%3A0x647e3a98ea8af656!2sLaxmi%20Nagar%20Market!5e0!3m2!1sen!2sin!4v1709230554523!5m2!1sen!2sin" 
                  className="w-full h-full rounded-2xl min-h-[400px]"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eye Caring Equipments Location"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
