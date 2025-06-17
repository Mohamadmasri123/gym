import { image, text } from "framer-motion/client";
import imgProd1 from "./../assets/p1.png";
import imgProd2 from "./../assets/p3.png";
import imgProd3 from "./../assets/p2.png";
import imgProd4 from "./../assets/p4.jpg";
import imgProd5 from "./../assets/p5.jpg";
import imgProd6 from "./../assets/p6.jpg";
import fdb1 from "./../assets/f1.jpg";
import fdb2 from "./../assets/f2.jpg";
import fdb3 from "./../assets/f3.jpg";
import fdb4 from "./../assets/f4.jpg";
import fdb5 from "./../assets/f5.jpg";
import fdb6 from "./../assets/f6.jpg";

import { delay } from "framer-motion";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Trainer",
    url: "/trainer",
  },
  {
    id: 3,
    title: "Program",
    url: "/program",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Pricing",
    url: "/Pricing",
  },
];
export const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    image: imgProd1,
    info: "Yoga Mat - Non-Slip, Eco-Friendly, 6mm Thick",
    price: "29.99",
  },
  {
    id: 2,
    category: "Fitness",
    image: imgProd2,
    info: "Resistance Bands Set - 5 Levels, Durable Latex, Portable",
    price: "19.99",
  },
  {
    id: 3,
    category: "Yoga",
    image: imgProd3,
    info: "Yoga Strap - Adjustable, Durable Cotton, 8 Feet Long",
    price: "14.99",
  },
  {
    id: 4,
    category: "Fitness",
    image: imgProd4,
    info: "Dumbbell Set - Adjustable Weights, 5-25 lbs, Compact Design",
    price: "49.99",
  },
  {
    id: 5,
    category: "Muscles",
    image: imgProd5,
    info: "Foam Roller - High Density, Muscle Recovery, 18 Inches",
    price: "24.99",
  },
  {
    id: 6,
    category: "Muscles",
    image: imgProd6,
    info: "Kettlebell - Cast Iron, 10 lbs, Ergonomic Handle",
    price: "34.99",
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Great products! The yoga mat is perfect for my daily practice.",
    img: fdb1,
    delay: 0.1,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I love the resistance bands! They are durable and easy to use.",
    img: fdb2,
    delay: 0.2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "I've been using the yoga strap for months, and it's made a huge difference in my flexibility.",
    img: fdb3,
    delay: 0.3,
  },
  {
    id: 4,
    name: "Bob Brown",
    text: "The adjustable dumbbell set is fantastic! It saves space and is perfect for my home workouts.",
    img: fdb4,
    delay: 0.4,
  },
  {
    id: 5,
    name: "Charlie Davis",
    text: "The foam roller is a game changer for muscle recovery. Highly recommend it!",
    img: fdb5,
    delay: 0.5,
  },
  {
    id: 6,
    name: "Emily Wilson",
    text: "I recently bought the kettlebell, and it's great for strength training at home.",
    img: fdb6,
    delay: 0.6,
  },
];
