import React from "react"
import Head from "next/head"
import Layout from "components/Layout/Layout.js";
import Post from "components/Post/Post.js";

export default function Slug({ posts ,allLocations, allServices, aboutPages }) {
  return (
    <Layout studioLocations={allLocations} services={allServices} aboutPages={aboutPages}>
      <Head>
        <title>{posts.fields.title} — Hapkido College of Australia Blog</title>
      </Head>
      <Post post={posts} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

    //Gets studio location ans sercives data for Layout.js
    const allLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)

    const allServices = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

    const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)


  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const posts = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!posts) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
        posts,
        allLocations,
        allServices,
        aboutPages
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}