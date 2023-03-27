"use client"
import Compass from "./Compass";
import styles from "./Compass.module.css"

export default function Home() {
  const destination = { lat: 37.7749, lng: -122.4194 };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Compass</h1>
      <Compass destination={destination} />
    </div>
  );
}