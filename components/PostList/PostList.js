import React from "react"
import Link from "next/link"

export default function PostList({ posts = [] }) {
  return (
    <section>
      {posts.map((post) => (
        <article key={post.sys.id}>
          <header>
            <h1>
              <Link href={`/post/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
            </h1>
            <small>
              <p>Published: {Date(post.fields.publishedDate).toString()}</p>
            </small>
          </header>
          <p>{post.fields.description}</p>
          <p>
            <Link href={`/post/${post.fields.slug}`}>
              <a>Continue reading »</a>
            </Link>
          </p>
        </article>
      ))}
</section>
  )
}
