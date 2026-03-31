import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Microscope, HeartPulse, Sparkles } from "lucide-react";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@assets/WhatsApp_Image_2026-03-31_at_16.45.28_1774958081362.jpeg"; // using slit lamp as hero image placeholder if needed

export default function HomePage() {
  const featuredProducts = productsData.flatMap(cat => cat.products).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/30 blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-200/20 blur-[80px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 text-primary font-medium text-sm mb-6 border border-primary/10 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Premium Quality Equipment</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Advanced Ophthalmic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Equipment Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Precision. Innovation. Care. Equipping eye specialists and hospitals with state-of-the-art technology for accurate diagnosis and superior surgical outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918882591713" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
                >
                  WhatsApp Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+918882591713" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:bg-muted text-foreground px-8 py-4 rounded-xl font-medium transition-all shadow-sm hover:-translate-y-1"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr from-white to-blue-50/50 border border-white/60 shadow-2xl p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <img 
                  src={heroImage} 
                  alt="Advanced Slit Lamp" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  style={{ mixBlendMode: 'multiply' }}
                />
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Certified</p>
                      <p className="text-xs text-muted-foreground">High Precision</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comprehensive Solutions</h2>
            <p className="text-muted-foreground text-lg">We provide a complete range of eye care equipment for modern clinical practices and hospitals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${category.slug}`} className="block h-full group">
                  <div className="bg-background rounded-2xl p-8 border border-border shadow-sm group-hover:shadow-md transition-all h-full group-hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{category.description}</p>
                    <div className="flex items-center text-primary font-medium text-sm gap-1 group-hover:gap-2 transition-all mt-auto">
                      Explore Category <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Eye Specialists Trust Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in the ophthalmic industry, we understand the critical nature of your work. Our equipment is sourced from leading manufacturers to ensure reliability, precision, and longevity.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Uncompromising Precision</h4>
                    <p className="text-muted-foreground">Every instrument is calibrated and tested to meet rigorous clinical standards.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground">We partner only with reputable global brands known for their durability and technological advancement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Dedicated Support</h4>
                    <p className="text-muted-foreground">Our relationship doesn't end at the sale. We provide comprehensive after-sales service and technical support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center text-center justify-center aspect-square">
                  <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Hospitals Equipped</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center text-center justify-center aspect-square">
                  <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-sm text-muted-foreground font-medium">Quality Guaranteed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center text-center justify-center aspect-square">
                  <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center text-center justify-center aspect-square bg-gradient-to-br from-primary to-blue-500 text-white border-none">
                  <h3 className="text-4xl font-bold mb-2">24/7</h3>
                  <p className="text-sm text-white/80 font-medium">Support Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Equipment</h2>
              <p className="text-muted-foreground text-lg">Explore our most requested ophthalmic devices favored by top professionals.</p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Ready to upgrade your clinic?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact us today for detailed specifications, pricing, and personalized recommendations for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918882591713" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get a Quote via WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:bg-muted text-foreground px-8 py-4 rounded-xl font-medium transition-all shadow-sm hover:-translate-y-1">
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
