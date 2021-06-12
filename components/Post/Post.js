import React from "react"
import ReactMarkdown from "react-markdown"
import Author from "components/Author/Author.js"

export default function Post({ post }) {
  return (
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {Date(post.fields.publishedDate).toString()}</p>
        </small>
      </header>
      <section>
      <ReactMarkdown>{post.fields.body}</ReactMarkdown>
      </section>
      <footer>
        <Author author={post.fields.author} />
      </footer>
      </article>
  )
}