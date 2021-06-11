import React from "react"
import Head from "next/head"
import Layout from "components/Layout/Layout.js";
import Service from "components/Service/Service";

export default function Slug({ allLocations, allServices, aboutPages, allAboutPages }) {
  return (
    <Layout studioLocations={allLocations} services={allServices} aboutPages={aboutPages}>
      <Head>
        <title>Hapkido College of Australia | {allAboutPages.fields.title}</title>
      </Head>
      <Service services={services} />
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
      content_type: "aboutPages",
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
  const allAboutPages = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!services) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
        allAboutPages,
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
  const allAboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = allAboutPages.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}