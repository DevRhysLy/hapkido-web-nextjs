import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function PostList({ posts = [] }) {
  return (
    <GridContainer spacing={4}>
      {posts.map((post) => (
        <GridItem xs={3} key={post.sys.id}>
          <header>
            <h1>
              <Link href={`/blog/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
            </h1>
            <small>
              <p>Published: {Date(post.fields.publishedDate).toString()}</p>
            </small>
          </header>
          <p>{post.fields.description}</p>
          <p>
            <Link href={`/blog/${post.fields.slug}`}>
              <a>Continue reading »</a>
            </Link>
          </p>
        </GridItem>
      ))}
</GridContainer>
  )
}
