import React, { Component } from "react";
import Title from "../Title/Title";
import "./Services.css";
import Fade from "react-reveal/Fade";
import {
  FaCocktail,
  FaHiking,
  FaPlaceOfWorship,
  FaShoppingBag
} from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "vibrant night life",
        info:
          "From theatre and music to trendy bars and clubs, theres always something to keep your evening entertaining."
      },
      {
        icon: <FaHiking />,
        title: "go and explore!",
        info:
          "Venture off around the city and you will find some absolute gems. If walking gets too much the public transport is fantastic."
      },
      {
        icon: <FaPlaceOfWorship />,
        title: "take in the culture",
        info:
          "The city is rich in its historic cultures. Cathedrals, mosques and historic landmarks offer an interesting day out."
      },
      {
        icon: <FaShoppingBag />,
        title: "shop till you drop",
        info:
          "If retail therapy is your thing then indulge with top brands and names at the fashion district."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          <Fade left>
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </Fade>
        </div>
      </section>
    );
  }
}
