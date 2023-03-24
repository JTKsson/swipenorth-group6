'use client'

import { useSpring, animated } from '@react-spring/web';
import "./swipeCSS.css";
import SwipeComp from "./swipeComp";
import GestureSwipe from "./gestureSwipe";

export default function MyComponent() {
  return (
    <div className='swipeContainer'>
    <SwipeComp />
    <GestureSwipe />
    
    </div>
  )
}






// 'use client'
// import React from 'react'
// import "./swipeCSS.css"
// import { useSpring, animated } from '@react-spring/web'

// export default function MyComponent() {
//     const springs = useSpring({
//         from: { x: 0 },
//         to: { x: 100 },
//       })
        
//   return (
//     <div className='swipeContainer'>
//     <animated.div
//       style={{
//         width: 80,
//         height: 80,
//         background: '#ff6d6d',
//         borderRadius: 8,
//       }}
//     />
//     </div>
//   )
// }


// // export default function page() {
// //   return (
// //     <div className='swipeContainer'>
// //         <div className='card'>Card</div>
// //     </div>
// //   )
// // }
