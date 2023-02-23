import React, { useState } from "react";
import "./Stars.css";

const RatingStars = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => {
        const starClass =
          index <= hoverIndex || index <= selectedIndex
            ? "star filled"
            : "star";

        return (
          <i
            key={index}
            className={`${starClass} fa fa-star`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;