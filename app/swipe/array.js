import React from "react";
import SwipableCarousel from "./Swipe";

const MyComponent = () => {
  const data = [
    { title: "First slide", description: "This is the first slide" },
    { title: "Second slide", description: "This is the second slide" },
    { title: "Third slide", description: "This is the third slide" },
  ];

  return <SwipableCarousel data={data} />;
};

export default MyComponent;