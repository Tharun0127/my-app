// src/pages/index.js
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Product from "./Products";
import {
  allgrill,
  dd,
  sd,
  tgrill,
  slgrill,
  dLower,
  cd,
  dv,
  eb,
  fwd,
  jet,
  rcd,
} from "../assets";
export { Home, About, Product, Contact, Services };

export const list = [
  {
    id: 1,
    cover:
      "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
    name: "air grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Apartment",
  },
  {
    id: 2,
    cover:
      "https://www.vairtech.com/uploadfile/2022/10/18/20221018133757781kIn.jpg",
    name: "air grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Condos",
  },
  {
    id: 3,
    cover:
      "https://www.vairtech.com/uploadfile/2022/10/18/20221018160227yIr12n.jpg",
    name: "Tair grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Offices",
  },
  {
    id: 4,
    cover:
      "https://www.vairtech.com/uploadfile/2022/11/29/20221129145341yWPNlt.jpg",
    name: "air grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover:
      "https://www.vairtech.com/uploadfile/2022/11/29/20221129165734aOotIn.jpg",
    name: "air grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Commercial",
  },
  {
    id: 6,
    cover:
      "https://www.vairtech.com/uploadfile/2022/11/28/202211281616420DXOsa.jpg",
    name: "air grille",
    location:
      "Customized Hvac Ventilation V Type Transfer Bathroom Decorative Aluminum Fresh Air Louver Door Grille DG-A",
    category: "registers & grilles",
    price: "INQUIRY NOW",
    type: "Apartment",
  },
];

const products = {
  grills: [
    {
      id: 1,
      cover: allgrill,
      name: "Alluminum Powder coated linear grill",
      location:
        "Mfg. from Aluminum Extruded 0°,15°,30° Section. Available Flanges:20,25,30,37mm",
      category: "grills",
      price: "INQUIRY NOW",
    },
    {
      id: 2,
      cover: tgrill,
      name: "Aluminum Powder Coated Two way grill",
      location:
        "Mfg. from Aluminum Extruded 15 degree & 30 degree section Available Flanges:20,25,30,37mm.",
      category: "grills",
      price: "INQUIRY NOW",
      type: "Condos",
    },
    {
      id: 3,
      cover: slgrill,
      name: "Aluminum Slotted grill",
      location:
        "Mfg. from Aluminum Extruded Section Available Sizes: 1,2,3,4,5 slots.",
      category: "grills",
      price: "INQUIRY NOW",
      type: "Commercial",
    },
    {
      id: 4,
      cover: dLower,
      name: "Alluminum door lower 45 degree",
      location:
        "Mfg. from Aluminum Extruded 45 Degree Section Available Flange Sizes: 20,25 & 30mm.",
      category: "grills",
      price: "INQUIRY NOW",
      type: "Homes",
    },
    {
      id: 5,
      cover: sd,
      name: "Aluminum Single Deflection Grill",
      location: "Mfg. from Aluminum Extruded Section With plastic bushes ",
      category: "grills",
      price: "INQUIRY NOW",
      type: "Villas",
    },
    {
      id: 6,
      cover: dd,
      name: "Aluminum double Deflection Grill",
      location: "Mfg. from Aluminum Extruded Section With plastic bushes. ",
      category: "grills",
      price: "INQUIRY NOW",
      type: "Villas",
    },
  ],
  diffusers: [
    {
      id: 1,
      cover: cd,
      name: "Aluminum 16 Gauge/18 Gauge SS 304 Sheet Diffuser",
      location:
        "Mfg. from Aluminum 16 gauge sheet/18 gauge SS 304 Sheet. Available Sizes: Outer to Outer 595*595",
      category: "diffusers",
      price: "INQUIRY NOW",
    },
    {
      id: 2,
      cover: dv,
      name: "Aluminum & RCR Sheet Powder Coated Diffuser",
      location:
        "Mfg. from Aluminum & RCR sheet – Powder Coating. Available Sizes: 100mm & 150mm",
      category: "diffusers",
      price: "INQUIRY NOW",
      type: "Condos",
    },
    {
      id: 3,
      cover: eb,
      name: "Aluminum Powder Coated Diffuser",
      location:
        "Mfg. from Aluminum (Powder Coating). Available Sizes: 200, 250, 275, 315, 400mm dia",
      category: "diffusers",
      price: "INQUIRY NOW",
      type: "Commercial",
    },
    {
      id: 4,
      cover: fwd,
      name: "Aluminum Extruded Section Powder Coated Diffuser",
      location:
        "Mfg. from Aluminum Extruded Section (Powder Coated). Available Flange Size: 20mm, 30mm",
      category: "diffusers",
      price: "INQUIRY NOW",
      type: "Homes",
    },
    {
      id: 5,
      cover: jet,
      name: "Aluminum Jet Diffuser",
      location: "Sizes: 250, 315 & 380mm dia",
      category: "diffusers",
      price: "INQUIRY NOW",
      type: "Villas",
    },
    {
      id: 6,
      cover: rcd,
      name: "Aluminum 18 Gauge Sheet Diffuser",
      location:
        "Mfg. from Aluminum 18 Gauge sheet - Powder Coating. Available Sizes: Neck 150, 200, 250, 300, 375mm & 450mm dia",
      category: "diffusers",
      price: "INQUIRY NOW",
      type: "Villas",
    },
  ],
  dampers: [
    {
      id: 1,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Air Damper Model A",
      location: "Manual damper for precise airflow control.",
      category: "dampers",
      price: "INQUIRY NOW",
      type: "Commercial",
    },
    {
      id: 2,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Air Damper Model B",
      location: "Automatic damper with motorized control.",
      category: "dampers",
      price: "INQUIRY NOW",
      type: "Industrial",
    },
    {
      id: 3,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Air Damper Model C",
      location: "Galvanized steel damper for durability.",
      category: "dampers",
      price: "INQUIRY NOW",
      type: "Residential",
    },
    {
      id: 4,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Air Damper Model D",
      location: "Insulated damper for energy efficiency.",
      category: "dampers",
      price: "INQUIRY NOW",
      type: "Commercial",
    },
    {
      id: 5,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Air Damper Model E",
      location: "Perfect for HVAC systems in large buildings.",
      category: "dampers",
      price: "INQUIRY NOW",
      type: "Mixed-use",
    },
  ],
  others: [
    {
      id: 1,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Access Panel Model A",
      location: "Standard access panel for wall applications.",
      category: "others",
      price: "INQUIRY NOW",
      type: "Apartment",
    },
    {
      id: 2,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Access Panel Model B",
      location: "Fire-rated panel for increased safety.",
      category: "others",
      price: "INQUIRY NOW",
      type: "Commercial",
    },
    {
      id: 3,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Flexible Duct Model C",
      location: "Durable ducting solution for HVAC systems.",
      category: "others",
      price: "INQUIRY NOW",
      type: "Industrial",
    },
    {
      id: 4,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Flexible Duct Model D",
      location: "Optimal airflow with minimal resistance.",
      category: "others",
      price: "INQUIRY NOW",
      type: "Residential",
    },
    {
      id: 5,
      cover:
        "https://www.vairtech.com/uploadfile/2022/11/28/20221128153211bOLZWD.jpg",
      name: "Flexible Duct Model E",
      location: "Cost-effective duct for any application.",
      category: "others",
      price: "INQUIRY NOW",
      type: "Loft",
    },
  ],
};

export default products;
