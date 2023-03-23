import React, { useState, useEffect } from "react";
import { Swipeable } from "react-swipeable";

const SwipableCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  let [index, setIndex] = useState(0);

  const handleSwipedLeft = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleSwipedRight = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <Swipeable onSwipedLeft={handleSwipedLeft} onSwipedRight={handleSwipedRight}>
      <h1>{data[index]?.title}</h1>
      <p>{data[index]?.description}</p>
    </Swipeable>
  );
};

export default SwipableCarousel;
