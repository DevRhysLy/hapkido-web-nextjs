import React from "react"
import ReactMarkdown from "react-markdown"
import styles from "./markdown.module.css"

export default function Service({ services }) {
  return (
    <div>
      <div className={styles.container}>
        <h1>{services.fields.service}</h1>
        <ReactMarkdown
          className={styles.reactMarkDown}
        >{services.fields.longDescription}</ReactMarkdown>
      </div>
    </div>
  )
}