'use client'

import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function GestureSwipe() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })

  // Bind it to a component
  return <animated.div className="card" {...bind()} style={{ x, y }} >Animated div</animated.div>
}