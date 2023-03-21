import React, { useState } from "react";
import { Swipeable } from "react-swipeable";

const SwipableCarousel = ({ data }) => {
  
  let [index, setIndex] = React.useState(0);

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
      <h1>{data[index].title}</h1>
      <p>{data[index].description}</p>
    </Swipeable>
  );
};

export default SwipableCarousel;



// const items = [
//   { id: 1, name: "Item 1", description: "This is item number 1" },
//   { id: 2, name: "Item 2", description: "This is item number 2" },
//   { id: 3, name: "Item 3", description: "This is item number 3" },
//   { id: 4, name: "Item 4", description: "This is item number 4" },
//   { id: 5, name: "Item 5", description: "This is item number 5" }
// ];

// export const SwipeableComponent = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSwipedLeft = () => {
//     if (activeIndex < items.length - 1) {
//       setActiveIndex(activeIndex + 1);
//     }
//   };

//   const handleSwipedRight = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

//   return (
//     <Swipeable
//       onSwipedLeft={handleSwipedLeft}
//       onSwipedRight={handleSwipedRight}
//     >
//       <div>
//         <h1>{items[activeIndex].name}</h1>
//         <p>{items[activeIndex].description}</p>
//       </div>
//     </Swipeable>
//   );
// };

// export const App = () => {
//   return <SwipeableComponent items={items} />;
// };
