import React from "react";
import "./Room.css";
import { Link } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import PropTypes from "prop-types";
import Slide from "react-reveal/Slide";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <Slide bottom>
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>£{price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Details
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </Slide>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
