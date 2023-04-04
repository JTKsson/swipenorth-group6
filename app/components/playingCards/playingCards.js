"use client";

import { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { annonserArr } from "@/pages/api/jobbannonser/jobbannonser";
import styles from "./playingCards.module.css";
import { dislikedAD } from "@/pages/api/dislikeAd/dislikeAd";
import { likedAD } from "@/pages/api/likedAd/likedAd";

// helpers, they curate spring data later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(12000px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [cards, setCards] = useState([]);
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  useEffect(() => {
    setCards(() => annonserArr);
  }, []);

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx, vy],
    }) => {
      const trigger = vy > 0.2;
      if (!active && trigger) {
        if (yDir === -1) {
          const likedCard = cards[index];
          likedAD.push(likedCard);
        } else if (yDir === 1) {
          const noLikedCard = cards[index];
          dislikedAD.push(noLikedCard);
        } else {
          console.log("swipe error");
        }

        gone.add(index);
      }
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0;
        const rot = my / 100 + (isGone ? yDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;
        return {
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      setTimeout(() => {
        const remove = cards.splice(index, 1);

        console.log("cards after", cards.length);
      }, "1200");

      // REDEAL
      // if (!active && gone.size === cards.length)
      //   setTimeout(() => {
      //     gone.clear();
      //     api.start((i) => to(i));
      //   }, 600);
    }
  );
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => {
        return (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              <div className={styles.cardcontent}>
                <p className={styles.title}>{cards[i].workTitle}</p>
                <p>Omfattning: {cards[i].workTime}</p>
                <p>Lön: {cards[i].salary}</p>
                <p>Sista ansökningsdag: {cards[i].lastApplyDate}</p>
                <p>{cards[i].description}</p>
                <button className={styles.btn}>Dela</button>
              </div>
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
}

export default function PlayingCards(cards) {
  return (
    <div className={`flex fill center ${styles.container}`}>
      <Deck />
    </div>
  );
}
