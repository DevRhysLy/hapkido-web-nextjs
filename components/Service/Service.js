import React from "react"
import ReactMarkdown from "react-markdown"

export default function Service({ services }) {
  return (
    <article>
      <header>
        <h1>{services.fields.service}</h1>
      </header>
      <section>
      <ReactMarkdown>{services.fields.longDescription}</ReactMarkdown>
      </section>
      <footer>
      </footer>
      </article>
  )
}