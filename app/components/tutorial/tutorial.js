import styles from "./tutorial.module.css"
import { TfiAngleDoubleUp, TfiAngleDoubleRight, TfiAngleDoubleLeft, TfiAngleDoubleDown} from "react-icons/tfi";
const Tutorial = () => {
  return (
    <div className={styles.tutorialCard}> 
      <p className={`${styles.arrow} ${styles.up}`}><TfiAngleDoubleUp />Swipe upp</p>
      <div className={styles.leftRight}>
      <p className={`${styles.arrow} ${styles.left}`}>Swipe vänster<TfiAngleDoubleLeft /></p>
      <p className={`${styles.arrow} ${styles.right}`}>Swipe höger<TfiAngleDoubleRight /></p>
      </div>
      <p className={`${styles.arrow} ${styles.down}`}>Swipe ner<TfiAngleDoubleDown /></p>
    </div>
  )
}

export default Tutorial