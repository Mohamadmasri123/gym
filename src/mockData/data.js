import { image } from "framer-motion/client"
import imgProd1 from './../assets/p1.png'
import imgProd2 from  './../assets/p3.png'
import imgProd3 from './../assets/p2.png'
import imgProd4 from './../assets/p4.jpg'
import imgProd5 from './../assets/p5.jpg'
import imgProd6 from './../assets/p6.jpg'



export const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Trainer',
    url: '/trainer',
  },
  {
    id: 3,
    title: 'Program',
    url: '/program',
  },
    {
    id: 4,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    title: 'Pricing',
    url: '/Pricing',
  },
  
]   
export const ProductsData = [

{
  id: 1,
  category: 'Yoga',
  image:imgProd1,
  info: 'Yoga Mat - Non-Slip, Eco-Friendly, 6mm Thick',
  price: "29.99",
}
,{
  id: 2,
  category: 'Fitness',
  image:imgProd2,
  info: 'Resistance Bands Set - 5 Levels, Durable Latex, Portable',
  price: "19.99",

},
{
  id: 3,
  category: 'Yoga',
  image:imgProd3,
  info: 'Yoga Strap - Adjustable, Durable Cotton, 8 Feet Long',
  price: "14.99",
},
{
  id: 4,
  category: 'Fitness',
  image:imgProd4,
  info: 'Dumbbell Set - Adjustable Weights, 5-25 lbs, Compact Design',
  price: "49.99",

},
{
  id: 5,
  category: 'Muscles',
  image:imgProd5,
  info: 'Foam Roller - High Density, Muscle Recovery, 18 Inches',
  price: "24.99",
},
{
  id: 6,
  category: 'Muscles',
  image:imgProd6,
  info: 'Kettlebell - Cast Iron, 10 lbs, Ergonomic Handle',
  price: "34.99",
},









]
