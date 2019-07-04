import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero hero='main-error'>
      <Banner title="error 404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return to home page
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
