"use client"
import { Inter } from 'next/font/google'
import styles from './swipe.css'
import MyComponent from "./array.js"
// import SwipableCarousel from './Swipe'


// const swipe = MyComponent

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Swipe jao</h1>

    <MyComponent />
    </main>
  )
}
