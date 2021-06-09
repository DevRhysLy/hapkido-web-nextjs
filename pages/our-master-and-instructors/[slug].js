import React from "react"
import Head from "next/head"
import Layout from "components/Layout/Layout.js";
import Post from "components/Post/Post.js";
import MainInstructors from "../../components/MainInstructors/MainInstructors";

export default function Slug({ instructors ,allLocations, allServices }) {
  return (
    <Layout studioLocations={allLocations} services={allServices}>
      <Head>
        <title>Hapkido College of Australia | {instructors.fields.location}</title>
      </Head>
      <MainInstructors instructors={instructors} />
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
      content_type: "mainInstructor",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

    //Gets studio location data for Layout.js
    const allLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)

    const allServices = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const instructors = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!instructors) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
        instructors,
        allLocations,
        allServices
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
  const allInstructors = await client
    .getEntries({ content_type: "mainInstructor" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = allInstructors.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}