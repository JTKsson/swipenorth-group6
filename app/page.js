import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import FontPage from './fontPage/page'

const inter = Inter({ subsets: ['latin'] });
console.log(inter);

export default function Home() {
  return (
    <main className={styles.main} >
    <h1>Git funkar jao</h1>
    <FontPage />
    </main>
  )
}
