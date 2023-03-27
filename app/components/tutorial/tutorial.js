import styles from "./tutorial.module.css"

const Tutorial = () => {
  return (
    <div className={styles.tutorialCard}> 
      <p className={`${styles.arrow} ${styles.up}`}>Swipe upp</p>
      <div className={styles.leftRight}>
      <p className={`${styles.arrow} ${styles.left}`}>Swipe vänster</p>
      <p className={`${styles.arrow} ${styles.right}`}>Swipe höger</p>
      </div>
      <p className={`${styles.arrow} ${styles.down}`}>Swipe ner</p>
    </div>
  )
}

export default Tutorial