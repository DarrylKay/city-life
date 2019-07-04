import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious city breaks"
          subtitle="Packed with culture and excitement, discover the UK’s best cities"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
