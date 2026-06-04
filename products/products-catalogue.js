/* ============================================================
   KH DENTASCOPE UK — PRODUCTS CATALOGUE
   ============================================================
   This is your product CMS. Add, edit or remove products here.
   Changes here update the products page automatically.

   STRUCTURE PER PRODUCT:
   ─────────────────────
   id          : unique string, used in URLs/autofill (no spaces)
   name        : full product name shown on tile & lightbox
   model       : model number / subtitle
   brand       : "Alltion" | "Xpedent" | "Kaps"
   category    : "Dental Microscope" | "Dental Loupes" | "Ophthalmic/ENT"
   bestseller  : true | false  — shows a "Best Seller" badge
   image       : path to main product image (relative to products/index.html)
   brandLogo   : path to brand logo image
   features    : array of exactly 3 bullet strings shown on the tile
   pdfDownload : path to downloadable PDF (or "" if none)
   lightbox    : { description, specs[], images[] }
     description : full product description text (can include \n for paragraphs)
     specs       : array of { label, value } shown as spec table rows
     images      : array of { src, caption } for the lightbox image gallery
   ============================================================ */

const PRODUCTS = [

  /* ══ ALLTION ══════════════════════════════════════════════ */
  {
    id:         "am2000-basic",
    name:       "AM-2000 Dental Microscope",
    model:      "AM-2000 (No Camera)",
    brand:      "Alltion",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "../Website Assets/Products/am2000 product image.png",
    brandLogo:  "../Website Assets/Brand - Alltion UK.png",
    features: [
      "Single-handed variable objective lens operation",
      "LED lighting with 5 modes & 3 light spot types",
      "Compatible with full HD camera system add-on"
    ],
    pdfDownload: "../Website Assets/Product PDF/AM2000.pdf",
    lightbox: {
      description:
        "The Alltion AM-2000 is an exceptionally versatile dental microscope designed to make everyday clinical work more efficient and precise.\n\nSingle-handed operation lets you adjust the variable objective lens with your thumb — never taking your hand off the handle — so common functions stay fast and uninterrupted.\n\nOptical performance is enhanced by two filter types (orange and green) and three light spot sizes (maximum, medium, minimum), giving you precise control over illumination for any clinical situation.\n\nThe integrated DC power supply provides two types of normal voltage output, compatible with almost all electronics products. A dedicated custom power supply cable can also be arranged.\n\nA full-function HD camera system is available for the AM-2000 — supporting photograph, video recording, freeze, USB storage, playback, contrasting photo/photo and photo/live images, mouse operation, and wireless foot control.",
      specs: [
        { label: "Magnification",       value: "Manual 5-Step" },
        { label: "Binocular",           value: "0–180° inclinable with pupillary distance adjustment" },
        { label: "Connecting Arm",      value: "120°" },
        { label: "Objective Lens",      value: "F250mm fixed focus (fixed-focus type) / Variable 250–430mm (V type)" },
        { label: "Illumination",        value: "LED, 5 modes" },
        { label: "Stand",               value: "Mobile floor stand" },
        { label: "Camera",              value: "Optional HD camera system" },
        { label: "Filter Types",        value: "Orange, Green" },
        { label: "Light Spots",         value: "Maximum, Medium, Minimum" }
      ],
      images: [
        { src: "../Website Assets/Products/am2000 product image.jpg",          caption: "AM-2000 Dental Microscope" },
        { src: "../Website Assets/Products/AM2000 basic single hand.jpg",       caption: "Single-Handed Operation" },
        { src: "../Website Assets/Products/am2000 basic optical performance.jpg", caption: "Optical Performance" },
        { src: "../Website Assets/Products/am2000 camera system.jpg",           caption: "HD Camera System" }
      ]
    }
  },

  {
    id:         "am2000-plus",
    name:       "AM-2000 Plus Dental Microscope",
    model:      "AM-2000 Plus",
    brand:      "Alltion",
    category:   "Dental Microscope",
    bestseller: true,
    image:      "../Website Assets/Products/am2000plus product image.png",
    brandLogo:  "../Website Assets/Brand - Alltion UK.png",
    features: [
      "Integrated FORA system — maintains natural upright posture",
      "90° binocular extender increases operating space",
      "Built-in 4K camera with advanced CMOS sensor"
    ],
    pdfDownload: "../Website Assets/Product PDF/AM-2000.pdf",
    lightbox: {
      description:
        "The AM-2000 Plus is Alltion's most popular dental microscope — and it's easy to see why.\n\nThe integrated Flexible Optics Rotating Assembly (FORA) — comprising a 90° binocular extender, pendulum rotation device and beam splitter (2:8 / 5:5) — allows the operator to maintain a natural, straight posture while observing the patient at any angle. This dramatically reduces fatigue and strain on the back, neck and shoulders during prolonged procedures.\n\nThe 90° binocular extender lengthens the horizontal distance of the eye point, giving the clinician more operating space while remaining in a fully upright position.\n\nAlltion's special perspective system enhances depth of field, allowing clearer observation of details at different depths — improving both accuracy and safety throughout the procedure.\n\nA built-in 4K camera system featuring an advanced CMOS sensor and image processing technology delivers crystal-clear, highly detailed video and still images — enabling precise manipulation, confident judgment, and seamless patient communication.",
      specs: [
        { label: "Magnification",       value: "Manual 5-Step" },
        { label: "FORA System",         value: "Included — 90° extender, pendulum rotation, beam splitter 2:8/5:5" },
        { label: "Camera",              value: "Built-in 4K with CMOS sensor" },
        { label: "Binocular",           value: "0–180° inclinable with pupillary distance adjustment" },
        { label: "Depth of Field",      value: "Enhanced perspective system" },
        { label: "Stand",               value: "Mobile floor stand" }
      ],
      images: [
        { src: "../Website Assets/Products/am2000plus product image.jpg",          caption: "AM-2000 Plus" },
        { src: "../Website Assets/Products/am2000plus-rotating1.jpg",              caption: "FORA System — View 1" },
        { src: "../Website Assets/Products/am2000plus-rotating2.jpg",              caption: "FORA System — View 2" },
        { src: "../Website Assets/Products/am2000plus-rotating3.jpg",              caption: "FORA System — View 3" },
        { src: "../Website Assets/Products/am2000plus binocular extender 1.jpg",   caption: "Binocular Extender" },
        { src: "../Website Assets/Products/am2000plus binocular extender 2.jpg",   caption: "Binocular Extender — Posture" },
        { src: "../Website Assets/Products/am2000plus binocular extender 3.jpg",   caption: "Binocular Extender — Detail" },
        { src: "../Website Assets/Products/am2000plus before.jpg",                 caption: "Depth of Field — Before" },
        { src: "../Website Assets/Products/am2000plus after.jpg",                  caption: "Depth of Field — After" }
      ]
    }
  },

  {
    id:         "am5000",
    name:       "AM-5000 Dental Microscope",
    model:      "AM-5000",
    brand:      "Alltion",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "../Website Assets/Products/am5000 Product Image.png",
    brandLogo:  "../Website Assets/Brand - Alltion UK.png",
    features: [
      "198–455mm variable objective lens for maximum reach",
      "Fluorescence and white illumination modes",
      "Built-in 4K camera with Wi-Fi connectivity"
    ],
    pdfDownload: "../Website Assets/Product PDF/AM-5000.pdf",
    lightbox: {
      description:
        "The AM-5000 represents Alltion's premium dental microscope — combining the proven FORA system with enhanced optics, wider magnification range and advanced imaging.\n\nThe Flexible Optics Rotating Assembly (FORA) — with 90° binocular extender, pendulum rotation device and beam splitter (2:8/5:5) — enables natural, upright posture throughout surgery, regardless of patient positioning.\n\nThe integrated Depth of Field Strengthening Device provides exceptional clarity across multiple planes simultaneously — invaluable for complex endodontic and restorative procedures.\n\nThe variable objective lens (198–455mm) gives the widest range of working distances in the AM range, offering unrivalled flexibility across different surgery setups.\n\nFluorescence and white illumination modes provide lighting solutions for all clinical scenarios. The built-in 4K camera system delivers high-resolution recording and Wi-Fi connectivity for seamless data transfer and patient communication.",
      specs: [
        { label: "Objective Lens",      value: "198–455mm variable" },
        { label: "Magnification",       value: "Manual 6-Step" },
        { label: "FORA System",         value: "Included — 90° extender, pendulum rotation, beam splitter 2:8/5:5" },
        { label: "Illumination",        value: "Fluorescence + White LED" },
        { label: "Camera",              value: "Built-in 4K with Wi-Fi" },
        { label: "DOF Enhancement",     value: "Integrated depth of field strengthening device" }
      ],
      images: [
        { src: "../Website Assets/Products/am5000 Product Image.png",                        caption: "AM-5000 Dental Microscope" },
        { src: "../Website Assets/Products/am5000FORA1.jpg",                                 caption: "FORA System — View 1" },
        { src: "../Website Assets/Products/am5000FORA2.jpg",                                 caption: "FORA System — View 2" },
        { src: "../Website Assets/Products/am5000FORA3.jpg",                                 caption: "FORA System — View 3" },
        { src: "../Website Assets/Products/am50000 intergrated dof strength device.jpg",     caption: "Integrated DOF Strengthening Device" },
        { src: "../Website Assets/Products/am5000 manual 6 step magnification.jpg",          caption: "Manual 6-Step Magnification" }
      ]
    }
  },

  {
    id:         "am7200",
    name:       "AM-7200 Dental Microscope",
    model:      "AM-7200 Zoom",
    brand:      "Alltion",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "",
    brandLogo:  "../Website Assets/Brand - Alltion UK.png",
    features: [
      "Continuous zoom magnification system",
      "Integrated camera for documentation",
      "Full product details coming soon"
    ],
    pdfDownload: "",
    lightbox: {
      description:
        "The AM-7200 is Alltion's zoom model, featuring a continuous zoom magnification system and integrated camera. Full product details and specifications are coming soon.\n\nContact us to register your interest or to request the latest information on availability and pricing.",
      specs: [
        { label: "Magnification",   value: "Continuous zoom — details coming soon" },
        { label: "Camera",          value: "Integrated — details coming soon" },
        { label: "Further Details", value: "Contact us for the latest information" }
      ],
      images: []
    }
  },

  /* ══ XPEDENT ══════════════════════════════════════════════ */
  {
    id:         "oral-optix-prime",
    name:       "Oral Optix Prime Surgical Microscope",
    model:      "Oral Optix Prime",
    brand:      "Xpedent",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "../Website Assets/Products/Ora Optix Prime prodcut Image.png",
    brandLogo:  "../Website Assets/Brand - Xpedent.png",
    features: [
      "German Schott optics with continuous zoom (3.4×–21.4×)",
      "Built-in 4K Ultra-HD imaging with HDMI output",
      "Ergonomic cable-free design with integrated filters"
    ],
    pdfDownload: "../Website Assets/Product PDF/oraloptix prime.pdf",
    lightbox: {
      description:
        "Designed for precision and clarity, the Xpedent Ora Optix Prime features a Continuous Lens System and a built-in 4K Ultra-HD imaging module with HDMI output — delivering crystal-clear visuals for clinical procedures, research, and patient communication.\n\nWith German Schott optics, an extended zoom range (3.4× to 21.4×), ergonomic cable-free design, and intuitive controls, it ensures seamless magnification, accurate colour rendering, and maximum comfort during use.\n\nThe integrated orange and green filters prevent resin curing interference and enhance visibility in challenging conditions. Ideal for dental and surgical applications.",
      specs: [
        { label: "Optics",           value: "German Schott Glass" },
        { label: "Zoom Range",       value: "3.4× – 21.4× continuous" },
        { label: "Camera",           value: "Built-in 4K Ultra-HD with HDMI output" },
        { label: "Design",           value: "Cable-free, ergonomic" },
        { label: "Filters",          value: "Integrated orange and green" },
        { label: "Application",      value: "Dental and surgical" }
      ],
      images: [
        { src: "", caption: "Ora Optix Prime — Image Coming Soon" }
      ]
    }
  },

  {
    id:         "viro-dental-microscope",
    name:       "VIRO Dental Microscope",
    model:      "VIRO™",
    brand:      "Xpedent",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "",
    brandLogo:  "../Website Assets/Brand - Xpedent.png",
    features: [
      "Integrated Optical Rotation System — binoculars stay level as microscope tilts",
      "German Schott Glass optics with continuous zoom",
      "Built-in 4K imaging and recording module"
    ],
    pdfDownload: "../Website Assets/Product PDF/viro microsope.pdf",
    lightbox: {
      description:
        "Clear Vision From Every Angle.\n\nThe VIRO™ Dental Microscope features an innovative Integrated Optical Rotation System that keeps the binoculars level as the microscope tilts — allowing comfortable viewing from wider angles without readjustment.\n\nWith German Schott Glass optics, a continuous zoom system, and a built-in 4K imaging and recording module, VIRO delivers exceptional clarity, ergonomic comfort, and seamless documentation for endodontic and periodontal procedures.\n\nDesigned to reduce fatigue and enhance precision, VIRO supports better posture, smoother workflow, and confident clinical performance.",
      specs: [
        { label: "Optics",              value: "German Schott Glass" },
        { label: "Zoom",                value: "Continuous zoom system" },
        { label: "Optical Rotation",    value: "Integrated — binoculars stay level during tilt" },
        { label: "Camera",              value: "Built-in 4K imaging and recording" },
        { label: "Application",         value: "Endodontic and periodontal procedures" }
      ],
      images: [
        { src: "", caption: "VIRO™ — Image Coming Soon" }
      ]
    }
  },

  /* ══ KAPS ════════════════════════════════════════════════ */
  {
    id:         "kaps-som62-1100",
    name:       "SOM 62 1100 Dental Microscope",
    model:      "SOM 62 1100",
    brand:      "Kaps",
    category:   "Dental Microscope",
    bestseller: false,
    image:      "../Website Assets/Products/KAPS SOM 621100 Product Image.jpg",
    brandLogo:  "../Website Assets/Brand - KAPS.png",
    features: [
      "Intelligent balancing system for effortless positioning",
      "Modular — upgradeable to Kaps 1400 at any time",
      "Wall, ceiling or floor mounting options"
    ],
    pdfDownload: "",
    lightbox: {
      description:
        "The Kaps SOM 62 1100 provides a versatile foundation for dental microscopy, combining proven apochromatic Kaps optics with an intelligent balancing system that ensures precise positioning under all conditions.\n\nThanks to its modular construction kit, the microscope can be individually configured and adapted to increasing requirements at any time — and upgraded to a Kaps 1400 when your needs grow.\n\nThe balancing system allows effortless movement of the microscope head to any desired position. Asymmetrical load distributions are effectively compensated, preserving ergonomics even when accessories are mounted.\n\nThe system provides the ideal entry into microscopy for quality-conscious general practices and specialised endodontic clinics alike. Its robust construction protects your investment long-term.\n\nVarious mounting options — wall, ceiling, or floor — make the SOM 62 1100 the optimal solution for practices with limited space.\n\nAvailable in a range of colour options, with comfort handles and modular upgradeability as standard.",
      specs: [
        { label: "Optics",              value: "Apochromatic Kaps optics" },
        { label: "Balancing",           value: "Intelligent balancing device — compensates asymmetric loads" },
        { label: "Modularity",          value: "Upgradeable to Kaps 1400" },
        { label: "Mounting Options",    value: "Wall, ceiling, or floor" },
        { label: "Handles",             value: "Comfort handles" },
        { label: "Colour Options",      value: "Multiple colours available" }
      ],
      images: [
        { src: "", caption: "Kaps SOM 62 1100 — Image Coming Soon" }
      ]
    }
  }

,

  /* ══ XPEDENT EXTRAS ══════════════════════════════════════ */
  {
    id:         "xpedent-ultrasonic-tips",
    name:       "Multifunction Ultrasonic Tips",
    model:      "Tip Collection",
    brand:      "Xpedent",
    category:   "Extras",
    bestseller: false,
    image:      "../Website Assets/Products/multifunction brush heads.jpg",
    brandLogo:  "../Website Assets/Brand - Xpedent.png",
    features: [
      "Scaling, periodontic & endodontic tips available",
      "Diamond-coated cavity preparation tips",
      "Surgical tips for bone surgery & sinus lifting"
    ],
    pdfDownload: "../Website Assets/Product PDF/TipBook.pdf",
    lightbox: {
      description:
        "A comprehensive range of ultrasonic tips covering every clinical discipline — from routine scaling through to complex surgical procedures.\n\nScaling\nPrecise work demands the right instrument. Our wide variety of scaling tips give you the freedom to choose the exact instrument for the situation, enabling complete periodontal cleaning.\n\nPeriodontics\nPerio tips are thin and designed for root planning and maintenance, providing the best access to furcation and curved roots.\n\nEndodontics\nEndodontic tips can be used across many areas. They are excellent for the removal of posts, removing dentine in pulp chambers, finding and widening orifices, preparing canals, removing broken instruments and cleaning prepared canals.\n\nCavity Preparation\nDiamond-coated tips designed to prepare cavities in the tooth before carrying out further dental work.\n\nSurgery Tips\nDesigned for a wide range of bone surgery applications, including sinus lifting and implantation procedures.",
      specs: [
        { label: "Scaling",             value: "Full variety for complete periodontal cleaning" },
        { label: "Periodontics",        value: "Thin tips for root planning & furcation access" },
        { label: "Endodontics",         value: "Post removal, orifice finding, canal preparation" },
        { label: "Cavity Preparation",  value: "Diamond-coated tips" },
        { label: "Surgery Tips",        value: "Sinus lifting & implantation procedures" },
        { label: "Brand",               value: "Xpedent" }
      ],
      images: [
        { src: "../Website Assets/Products/multifunction brush heads.jpg", caption: "Multifunction Ultrasonic Tips" }
      ]
    }
  },

  {
    id:         "xpedent-ergo-loupes",
    name:       "Ergo Loupes",
    model:      "ErgoCarbonFlex",
    brand:      "Xpedent",
    category:   "Dental Loupes",
    bestseller: false,
    image:      "../Website Assets/Products/ErgoLoupes.jpg",
    brandLogo:  "../Website Assets/Brand - Xpedent.png",
    features: [
      "Magnetic quick-swap 3.5× to 6.5× magnification",
      "Ergonomic design — zero neck and shoulder strain",
      "Ultra-light carbon fibre frame for all-day comfort"
    ],
    pdfDownload: "../Website Assets/Product PDF/Ergoflex Loupes.pdf",
    lightbox: {
      description:
        "The Xpedent Ergo Loupes combine cutting-edge ergonomics with innovative magnetic optics — designed for clinicians who demand both precision and comfort throughout their working day.\n\nMagnetic Quick-Swap Magnification\nThe innovative magnetic design enables fast and secure switching — as effortless as fastening a buckle. Simply bring it close and it snaps into place, providing instant 3.5× to 6.5× magnification change. Easy to operate and ideal for a wide range of clinical scenarios.\n\nErgonomic Viewing Angle — Zero Neck and Shoulder Strain\nDesigned with ergonomics in mind, the Ergo Loupes align with the natural curve of the neck and shoulders, evenly distributing pressure. Comfortable for extended wear with no fatigue.\n\nDust-Free Optical Cavity — Crystal-Clear Vision\nAn advanced sealed optical chamber design keeps out impurities, maintaining lens clarity throughout use. Enjoy a pure, high-definition visual experience in every procedure.\n\nUltra-Light Carbon Fibre Frame\nCrafted from ultra-lightweight carbon fibre, the frame minimises pressure on the nose bridge and ears — perfect for all-day wear with no discomfort.\n\n4-in-1 Mirror\nVersatile mirror system included for enhanced visibility across clinical applications.",
      specs: [
        { label: "Magnification",       value: "3.5× to 6.5× — magnetic quick-swap" },
        { label: "Frame Material",      value: "Ultra-light carbon fibre" },
        { label: "Optical Chamber",     value: "Dust-free sealed design" },
        { label: "Ergonomics",          value: "Aligns with natural neck and shoulder curve" },
        { label: "Included",            value: "4-in-1 mirror" },
        { label: "Brand",               value: "Xpedent" }
      ],
      images: [
        { src: "../Website Assets/Products/ErgoLoupes.jpg", caption: "Xpedent Ergo Loupes" }
      ]
    }
  },

  {
    id:         "xpedent-mc01-chair",
    name:       "MC01 Microscope Chair",
    model:      "MC01",
    brand:      "Xpedent",
    category:   "Extras",
    bestseller: false,
    image:      "../Website Assets/Products/MC01chairproductimage.png",
    brandLogo:  "../Website Assets/Brand - Xpedent.png",
    features: [
      "Bionic saddle-shaped seat design",
      "Naturally straightens posture — supports lumbar health",
      "More thigh movement space for extended clinical sessions"
    ],
    pdfDownload: "../Website Assets/Product PDF/Microscope Master Chair.pdf",
    lightbox: {
      description:
        "The MC01 Microscope Chair is designed according to the principles of bionics. Its specially engineered saddle-shaped seat encourages the back to naturally straighten when seated, helping to maintain lumbar health during long procedures.\n\nThe unique structure provides more space for thigh movement, reducing pressure and fatigue — giving a sensation of effortless, balanced seating throughout the working day.\n\nIdeal for use alongside dental microscopes, the MC01 supports correct posture and working height, complementing your clinical setup.",
      specs: [
        { label: "Design",          value: "Bionic saddle-shaped seat" },
        { label: "Posture Support", value: "Natural spinal alignment — lumbar health" },
        { label: "Mobility",        value: "Extended thigh movement space" },
        { label: "Application",     value: "Dental microscope workstation use" },
        { label: "Brand",           value: "Xpedent" }
      ],
      images: [
        { src: "../Website Assets/Products/MC01chairproductimage.png", caption: "MC01 Microscope Chair" },
        { src: "../Website Assets/Products/MC01 Colour Chair.png",     caption: "MC01 — Colour Options" }
      ]
    }
  }

];

/* ── BRAND META (logo paths & external URLs) ─────────────── */
const BRANDS = {
  "Alltion": {
    logo: "../Website Assets/Brand - Alltion UK.png",
    url:  "https://www.alltion.uk/home"
  },
  "Xpedent": {
    logo: "../Website Assets/Brand - Xpedent.png",
    url:  "https://www.xpedent.co.uk/"
  },
  "Kaps": {
    logo: "../Website Assets/Brand - KAPS.png",
    url:  "https://kaps-international.com/en/"
  }
};

/* ── CATEGORIES ───────────────────────────────────────────── */
const CATEGORIES = [
  "Dental Microscope",
  "Dental Loupes",
  "Extras"
];
