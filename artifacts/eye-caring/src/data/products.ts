import imgSlitLamp from "@assets/WhatsApp_Image_2026-03-31_at_16.45.28_1774958081362.jpeg";
import imgAutoRefractometerKera from "@assets/WhatsApp_Image_2026-03-31_at_16.45.25_1774958081362.jpeg";
import imgIndirectOphthalmoscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.24_1774958081362.jpeg";
import imgDirectOphthalmoscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.26_1774958081362.jpeg";

import imgOperatingMicroscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.26_(1)_1774958081362.jpeg";
import imgKeratometer from "@assets/WhatsApp_Image_2026-03-31_at_16.45.28_1774958081362.jpeg";
import imgLensMeter from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_(1)_1774958081362.jpeg";
import imgVolkLens from "@assets/WhatsApp_Image_2026-03-31_at_16.45.29_(1)_1774958081362.jpeg";

import imgTrialLensSet from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_1774958081362.jpeg";
import imgIshiharaBook from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_1774958081362.jpeg";
import imgAutoRefractometerOptical from "@assets/WhatsApp_Image_2026-03-31_at_16.45.25_1774958081362.jpeg";
import imgSlitLampOptical from "@assets/WhatsApp_Image_2026-03-31_at_16.45.28_1774958081362.jpeg";

import imgAutoLensmeterRef from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_(1)_1774958081362.jpeg";
import imgPhoropter from "@assets/WhatsApp_Image_2026-03-31_at_16.45.24_(1)_1774958081362.jpeg";
import imgAutoRefractometerRef from "@assets/WhatsApp_Image_2026-03-31_at_16.45.25_1774958081362.jpeg";
import imgIshiharaBooksRef from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_1774958081362.jpeg";

export type Product = {
  id: string;
  name: string;
  image: string;
  description?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
};

export const productsData: Category[] = [
  {
    id: "cat-1",
    name: "Diagnostic Equipment",
    slug: "diagnostic-equipment",
    description: "High-precision tools for accurate eye examination and disease diagnosis.",
    products: [
      { id: "diag-1", name: "Slit Lamp Biomicroscope", image: imgSlitLamp },
      { id: "diag-2", name: "Auto Refractometer/Keratometer", image: imgAutoRefractometerKera },
      { id: "diag-3", name: "Indirect Ophthalmoscope", image: imgIndirectOphthalmoscope },
      { id: "diag-4", name: "Direct Ophthalmoscope", image: imgDirectOphthalmoscope },
    ],
  },
  {
    id: "cat-2",
    name: "Surgical Instruments",
    slug: "surgical-instruments",
    description: "Advanced surgical tools and microscopes for reliable operational outcomes.",
    products: [
      { id: "surg-1", name: "Operating Microscope", image: imgOperatingMicroscope },
      { id: "surg-2", name: "Keratometer", image: imgKeratometer },
      { id: "surg-3", name: "Lens Meter/Lensometer", image: imgLensMeter },
      { id: "surg-4", name: "Volk Lens", image: imgVolkLens },
    ],
  },
  {
    id: "cat-3",
    name: "Optical Devices",
    slug: "optical-devices",
    description: "Essential optical solutions and trial sets for thorough vision testing.",
    products: [
      { id: "opt-1", name: "Trial Lens Set", image: imgTrialLensSet },
      { id: "opt-2", name: "Ishihara Color Vision Test Book", image: imgIshiharaBook },
      { id: "opt-3", name: "Auto Refractometer", image: imgAutoRefractometerOptical },
      { id: "opt-4", name: "Slit Lamp", image: imgSlitLampOptical },
    ],
  },
  {
    id: "cat-4",
    name: "Refraction Equipment",
    slug: "refraction-equipment",
    description: "State-of-the-art refraction and lens measurement devices.",
    products: [
      { id: "ref-1", name: "Auto Lensmeter", image: imgAutoLensmeterRef },
      { id: "ref-2", name: "Phoropter/Refractor", image: imgPhoropter },
      { id: "ref-3", name: "Auto Refractometer", image: imgAutoRefractometerRef },
      { id: "ref-4", name: "Ishihara Test Books", image: imgIshiharaBooksRef },
    ],
  },
];
