import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

// import global css
import "../styles/global.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
