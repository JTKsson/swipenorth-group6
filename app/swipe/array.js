import React from "react";
import SwipableCarousel from "../components/SwipableCarousel";

const MyComponent = () => {
  const data = [
    { title: "First slide", description: "This is the first slide" },
    { title: "Second slide", description: "This is the second slide" },
    { title: "Third slide", description: "This is the third slide" },
  ];

  return (
    <div>
      <SwipableCarousel data={data} />
    </div>
  )
};

export default MyComponent;