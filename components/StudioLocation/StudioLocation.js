import React from "react"
import ReactMarkdown from "react-markdown"

export default function StudioLocation({ studioLocation }) {
  return (
    <article>
      <header>
        <h1>{studioLocation.fields.location}</h1>
      </header>
      <section>
      <ReactMarkdown>{studioLocation.fields.body}</ReactMarkdown>
      </section>
      <footer>
        {/* <MainInstructor author={post.fields.author} /> */}
      </footer>
      </article>
  )
}