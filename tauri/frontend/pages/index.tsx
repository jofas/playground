import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { invoke } from '@tauri-apps/api/tauri'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    invoke('greet', { name: 'World' })
      .then(setGreeting)
  })

  return (
    <>
      <main className={styles.main}>
        <h1>Example Tauri App</h1>
        <p>{greeting}</p>
      </main>
    </>
  )
}
