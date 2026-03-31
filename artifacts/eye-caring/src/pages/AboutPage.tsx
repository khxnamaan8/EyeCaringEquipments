import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Eye, ShieldCheck, Users } from "lucide-react";
import heroImg from "@assets/WhatsApp_Image_2026-03-31_at_16.45.26_(1)_1774958081362.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Advancing Eye Care Through <span className="text-primary">Superior Technology</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Based in the heart of Delhi, Eye Caring Equipments has been a trusted partner for ophthalmologists, optometrists, and hospitals seeking reliable medical devices.
            </motion.p>
          </div>

          {/* Image & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-white border border-border shadow-xl aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              <img src={heroImg} alt="Operating Microscope" className="w-full h-full object-contain relative z-10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Eye Caring Equipments was established with a singular vision: to bridge the gap between advanced ophthalmic technology and eye care practitioners in India. We recognized that the quality of diagnosis and surgery relies heavily on the precision of the instruments used.
                </p>
                <p>
                  Over the years, we have meticulously curated a portfolio of diagnostic, surgical, optical, and refraction equipment from the industry's most respected manufacturers. 
                </p>
                <p>
                  Operating from Laxmi Market, Delhi, our dedicated team not only supplies equipment but acts as technical consultants, helping practitioners choose the exact configurations that suit their clinical needs and patient volume.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Precision</h3>
                <p className="text-muted-foreground">We never compromise on the accuracy and calibration of our instruments.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">Transparent pricing, authentic products, and honest recommendations.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">Continuously updating our inventory with the latest technological advancements.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-muted-foreground">Building long-term relationships with clinics through reliable after-sales support.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
