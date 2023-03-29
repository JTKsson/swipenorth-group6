// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import bigZeroCola from "./array";
// import styles from "./Drinks.module.css";
import {useSwipeable} from "react-swipeable";

const inter = Inter({ subsets: ["latin"] });

let drinks = bigZeroCola();

export default function Drinks(props) {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    
  });
  
  return (
    <>
      <h1>SwipeTest Page</h1>
      <div className='card' key={id} {...handlers}/*onClick={handleClick}*/>
      {drinks}
      </div>
    </>
  );
}
