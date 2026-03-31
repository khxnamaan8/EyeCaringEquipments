// ─── Diagnostic Equipment ─────────────────────────────────────────────────────
import imgSlitLampCamera from "@assets/WhatsApp_Image_2026-03-31_at_16.03.10_1774959933572.jpeg";
import imgSlitLamp from "@assets/WhatsApp_Image_2026-03-31_at_16.45.28_1774958081362.jpeg";
import imgNidekARK from "@assets/WhatsApp_Image_2026-03-31_at_16.07.43_1774959933572.jpeg";
import imgAutoRefractometerKera from "@assets/WhatsApp_Image_2026-03-31_at_16.45.25_1774958081362.jpeg";
import imgIndirectOphthalmoscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.24_1774958081362.jpeg";
import imgDirectOphthalmoscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.26_1774958081362.jpeg";

// ─── Surgical Instruments ─────────────────────────────────────────────────────
import imgOperatingMicroscope from "@assets/WhatsApp_Image_2026-03-31_at_16.45.26_(1)_1774958081362.jpeg";
import imgExamUnit from "@assets/WhatsApp_Image_2026-03-31_at_16.03.21_1774959933572.jpeg";
import imgFundusLenses from "@assets/WhatsApp_Image_2026-03-31_at_16.45.29_1774959933572.jpeg";
import imgVolkColorLenses from "@assets/WhatsApp_Image_2026-03-31_at_16.45.30_(1)_1774959933572.jpeg";
import imgVolkLensBox from "@assets/WhatsApp_Image_2026-03-31_at_16.45.29_(1)_1774958081362.jpeg";

// ─── Refraction Equipment ─────────────────────────────────────────────────────
import imgPhoropter from "@assets/WhatsApp_Image_2026-03-31_at_16.45.24_(1)_1774958081362.jpeg";
import imgAutoLensmeter from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_(1)_1774958081362.jpeg";
import imgTrialLensSet from "@assets/WhatsApp_Image_2026-03-31_at_16.45.25_(1)_1774959933572.jpeg";
import imgMotorizedTable from "@assets/WhatsApp_Image_2026-03-31_at_16.07.35_1774959933572.jpeg";

// ─── Optical Accessories ──────────────────────────────────────────────────────
import imgIshiharaBook from "@assets/WhatsApp_Image_2026-03-31_at_16.45.27_1774958081362.jpeg";
import imgKeratometer from "@assets/WhatsApp_Image_2026-03-31_at_16.45.24_(1)_1774958081362.jpeg";

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  products: Product[];
};

export const productsData: Category[] = [
  {
    id: "cat-1",
    name: "Diagnostic Equipment",
    slug: "diagnostic-equipment",
    description:
      "High-precision instruments for comprehensive eye examination, disease detection and accurate diagnosis.",
    icon: "microscope",
    products: [
      {
        id: "diag-1",
        name: "Slit Lamp Biomicroscope with Camera",
        image: imgSlitLampCamera,
        description:
          "Advanced slit lamp with integrated digital camera for detailed anterior segment examination and image documentation.",
      },
      {
        id: "diag-2",
        name: "Slit Lamp Biomicroscope",
        image: imgSlitLamp,
        description:
          "High-quality slit lamp providing excellent illumination and magnification for thorough anterior eye segment analysis.",
      },
      {
        id: "diag-3",
        name: "NIDEK Auto Refractometer / Keratometer",
        image: imgNidekARK,
        description:
          "NIDEK precision auto refractometer and keratometer with color display for fast, accurate refractive measurements.",
      },
      {
        id: "diag-4",
        name: "Auto Refractometer / Keratometer",
        image: imgAutoRefractometerKera,
        description:
          "Combined auto refractometer and keratometer for objective measurement of refractive error and corneal curvature.",
      },
      {
        id: "diag-5",
        name: "Indirect Ophthalmoscope",
        image: imgIndirectOphthalmoscope,
        description:
          "Binocular indirect ophthalmoscope for wide-field retinal examination, ideal for detecting retinal disorders.",
      },
      {
        id: "diag-6",
        name: "Direct Ophthalmoscope",
        image: imgDirectOphthalmoscope,
        description:
          "Compact, lightweight direct ophthalmoscope for detailed fundus examination in clinical settings.",
      },
    ],
  },
  {
    id: "cat-2",
    name: "Surgical Instruments",
    slug: "surgical-instruments",
    description:
      "Advanced surgical microscopes, examination units and precision instruments for reliable ophthalmic procedures.",
    icon: "surgery",
    products: [
      {
        id: "surg-1",
        name: "Operating Microscope",
        image: imgOperatingMicroscope,
        description:
          "Floor-standing ophthalmic operating microscope with coaxial illumination, motorized zoom and multiple magnification steps.",
      },
      {
        id: "surg-2",
        name: "Ophthalmic Examination Unit",
        image: imgExamUnit,
        description:
          "Complete ophthalmic examination workstation with motorized patient chair, instrument table, external camera and monitor.",
      },
      {
        id: "surg-3",
        name: "Fundus Lenses (90D / 78D / 20D)",
        image: imgFundusLenses,
        description:
          "Premium non-contact fundus diagnostic lenses in 20D, 78D and 90D for slit-lamp-assisted retinal examination.",
      },
      {
        id: "surg-4",
        name: "Volk 90D Lenses – Colour Series",
        image: imgVolkColorLenses,
        description:
          "Volk 90D non-contact slit lamp lenses available in 8 vibrant colours for easy identification and superior retinal imaging.",
      },
      {
        id: "surg-5",
        name: "Volk Lens Set",
        image: imgVolkLensBox,
        description:
          "Complete Volk diagnostic lens set in protective case — ideal for comprehensive fundus and vitreous examination.",
      },
    ],
  },
  {
    id: "cat-3",
    name: "Refraction Equipment",
    slug: "refraction-equipment",
    description:
      "State-of-the-art instruments for accurate vision testing, lens measurement and refraction correction.",
    icon: "glasses",
    products: [
      {
        id: "ref-1",
        name: "Phoropter / Refractor",
        image: imgPhoropter,
        description:
          "Precision ophthalmic refractor for subjective refraction, providing reliable sphere, cylinder and axis measurements.",
      },
      {
        id: "ref-2",
        name: "Auto Lensmeter / Lensometer",
        image: imgAutoLensmeter,
        description:
          "Automated digital lensmeter with touch screen for fast, accurate measurement of spectacle and contact lens prescriptions.",
      },
      {
        id: "ref-3",
        name: "Trial Lens Set",
        image: imgTrialLensSet,
        description:
          "Complete 266-piece trial lens set in premium wooden case with trial frame, ideal for subjective refraction testing.",
      },
      {
        id: "ref-4",
        name: "Motorised Instrument Table",
        image: imgMotorizedTable,
        description:
          "Electric height-adjustable ophthalmic instrument table with smooth motorised movement for effortless positioning during examinations.",
      },
    ],
  },
  {
    id: "cat-4",
    name: "Optical Accessories",
    slug: "optical-accessories",
    description:
      "Essential diagnostic accessories, colour vision tests and complementary optical tools for a complete practice.",
    icon: "eye",
    products: [
      {
        id: "acc-1",
        name: "Ishihara Colour Vision Test Book",
        image: imgIshiharaBook,
        description:
          "Standard Ishihara 24-plate colour deficiency test book, widely used for screening colour blindness in clinical practice.",
      },
      {
        id: "acc-2",
        name: "Keratometer",
        image: imgKeratometer,
        description:
          "Manual keratometer for precise measurement of corneal curvature, used in contact lens fitting and pre-surgical assessment.",
      },
    ],
  },
];
