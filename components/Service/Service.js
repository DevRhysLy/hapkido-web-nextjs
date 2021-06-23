import React from "react"
import ReactMarkdown from "react-markdown"
import styles from "./markdown.module.css"

export default function Service({ services }) {
  return (
    <article>
      <header>
        <h1 style={{textAlign: "center"}}>{services.fields.service}</h1>
      </header>
      <section>
      <ReactMarkdown 
      className={styles.reactMarkDown}
      >{services.fields.longDescription}</ReactMarkdown>
      </section>
      <footer>
      </footer>
      </article>
  )
}