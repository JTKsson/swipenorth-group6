'use client'

import { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import styles from "./styles.module.css";

const cardsFetched = [
  { title: "Hej tilte 1" },
  { title: "Hej tilte 2" },
  // <div>Hej 2</div>,
  // 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
  // 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
  // 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
  // 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  // 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [cards, setCards] = useState([]);
  const [liked, setLiked] = useState([]);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  console.log("liked", liked);
  useEffect(() => {
    console.log("setcards");
    setCards(() => cardsFetched);
  }, []);
  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx, vy],
    }) => {
      // console.log('xDir', xDir, yDir)
      // console.log('vy', vx, vy)
      const trigger = vy > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) {
        console.log("direction isNorth", yDir === 0 ? "north" : "south");
        const newLike = cards[index];
        // liked.push({card: cards[index], index})
        setLiked([...liked, newLike]);
        console.log("liked", liked);
        // setLiked([
        //   ...liked,
        //   {
        //     card: cards[index],
        //   },
        // ])
        gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      }
      api.start((i) => {
        // console.log('api start')
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = my / 100 + (isGone ? yDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        // const rot = 1
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        // console.log('rot', rot)
        return {
          y,
          // x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => {
        // console.log('x, y', x, y)
        return (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                // backgroundImage: `url(${cards[i]})`,
              }}
            >
              <div>{cards[i].title}</div>
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
}

export default function PlayingCards() {
  return (
    <div className={`flex fill center ${styles.container}`}>
      <Deck />
    </div>
  );
}
