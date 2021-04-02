import React from "react"
import styles from "./Header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Learn web design</h1>
      </Link>
    </header>
  )
}
