import React from "react";
import { Link } from "wouter";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import logoImg from "@assets/EyeCaringEquipments_1774958046472.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src={logoImg} alt="Eye Caring Equipments" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Leading provider of advanced ophthalmic equipment, ensuring precision, innovation, and care for eye specialists and hospitals.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/918882591713" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.015.264 2.008.766 2.88l-1.02 3.731 3.824-1.004a5.727 5.727 0 002.198.441h.001c3.181 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.766-5.769-5.766v.018zm3.284 8.243c-.18.09-.18.09-1.062.527-.882.437-1.037.476-1.196.476-.16 0-.391-.07-.55-.236-.16-.166-.628-.629-.769-.769-.14-.141-.28-.157-.46-.067-.18.09-.763.281-1.453.896-.537.478-.897 1.069-1.004 1.25-.107.18-.012.28.078.371.08.081.18.21.27.323.09.111.12.18.18.271.06.09.03.178-.016.268-.046.09-.434 1.05-.595 1.439-.158.38-.316.328-.433.334-.11.006-.237.006-.353.006-.117 0-.306-.044-.466-.219-.16-.174-.613-.598-.613-1.458 0-.86.627-1.693.714-1.815.087-.121 1.238-1.892 2.997-2.65.419-.18.745-.288 1.001-.368.421-.133.805-.114 1.107-.07.34.05 1.062.433 1.212.853.15.42.15.78.106.857-.044.077-.16.123-.34.213z" fillRule="evenodd" clipRule="evenodd"/></svg>
              </a>
              <a href="tel:+918882591713" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" /> Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" /> About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" /> Products</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  27 East Laxmi Market, Street No.1,<br/> Near Shiv Mandir,<br/> Delhi-110092
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918882591713" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 8882591713
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Eye Caring Equipments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
