import React from "react"
import ReactMarkdown from "react-markdown"

export default function MainInstructors({ instructors }) {
  return (
    <article>
      <header>
        <h1>{instructors.fields.name}</h1>
      </header>
      <img src={instructors.fields.avatar.fields.file.url}/>
      <section>
      <ReactMarkdown>{instructors.fields.fullBio}</ReactMarkdown>
      </section>
      <footer>
      </footer>
      </article>
  )
}