import React from "react"
import Head from "next/head"
import Layout from "components/Layout/Layout.js";
import MainInstructors from "components/MainInstructors/MainInstructors.js";
import ImageGallery from "components/ImageGallery/ImageGallery.js";

export default function Slug({ galleries, allLocations, allServices, aboutPages }) {
  return (
    <Layout studioLocations={allLocations} services={allServices} aboutPages={aboutPages}>
      <Head>
        <title>{galleries.fields.title} | Hapkido College of Australia</title>
        <meta name="description" content={galleries.fields.description} />
        <meta name="og:description" content={galleries.fields.description} />
        <meta property="og:title" content={`${galleries.fields.title} | Hapkido College of Australia`} />
        <meta property="og:image" content={galleries.fields.images[0].fields.file.url} />
        <meta property="og:url" content="www.hapkidocollege.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Head>
      <ImageGallery subGallery={galleries} />
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
      content_type: "imageGallery",
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

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const galleries = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!galleries) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      galleries,
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
  const gallery = await client
    .getEntries({ content_type: "imageGallery" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = gallery.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}