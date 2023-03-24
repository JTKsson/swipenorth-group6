'use client'

import { useSpring, animated } from '@react-spring/web';
import "./swipeCSS.css";

export default function SwipeComp() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0 },
    onStart: () => console.log('the spring has started'),
  }))

  //(const) springs is a config prop is an object with properties used to customise animations. conrols how springs behave.

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
        y: 0,
      },
      to: {
        x: 0,
        y: -750,
      },
    })
  }

  return (
    
    <animated.div
      onClick={handleClick}
      style={{
        width: 350,
        height: 550,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs, //passes SpringValues, aka springs, to the animated component
      }}
    />
  )
}

