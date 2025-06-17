import React from "react";
import Navbar from "./components/Navbar";
import bg from "./assets/bg-BiCRh3MN.png";
import Hero from "./components/Hero";
import Equipment from "./components/Equipment";
import Banner from "./components/Banner";
import banner1Img from "./../src/assets/10.png";
import banner2Img from "./../src/assets/3.jpg";
import TabComp from "./components/TabComp";
import Testimonial from "./components/Testimonial";
import News from "./components/News";

const bgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  BackgroundAttachment: "fixed",
};

const bannerinfo1 = {
  img: banner1Img,
  title: "Explore Our Latest Equipment",
  subtitle: "Discover the best gear for your next adventure.",
  link: "Shop Now",
};
const bannerinfo2 = {
  img: banner2Img,
  title: "Join Our Community",
  subtitle: "Connect with fellow enthusiasts and share your experiences.",
  link: "Join Now",
};

const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="" style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipment />
      <Banner {...bannerinfo1} />
      <TabComp />
      <Banner {...bannerinfo2} />
      <Testimonial/>
      <News />
    </div>
  );
};

export default App;
