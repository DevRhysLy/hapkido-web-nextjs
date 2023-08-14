import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
//components used
import Layout from "components/Layout/Layout.js";
import Parallax from "components/Parallax/Parallax.js";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import style from "components/Markdown/markdown.module.css";

const useStyles = makeStyles(styles);

export default function SpecialOffer({
  allLocations,
  allServices,
  aboutPages,
  specialOffer
}) {
  const classes = useStyles();
  return (
    <Layout
      studioLocations={allLocations}
      services={allServices}
      aboutPages={aboutPages}
    >
      <Head>
        <title>Special Offer | Hapkido College of Australia</title>
      </Head>
      <Parallax image={`http:${specialOffer[0].fields.bannerImage.fields.file.url}`} responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <h1 className={classes.title}>{specialOffer[0].fields.title}</h1>
            <h3 className={classes.subtitle}> {specialOffer[0].fields.subtitle}</h3>
          </div>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.indexRaised)}>
        <div className={classes.container}>
          <div className={classes.jumboHeadingContainer}>
            <h1 className={classes.jumboHeading}></h1>
          </div>
          <ReactMarkdown className={style.reactMarkDown}>
            {specialOffer[0].fields.description}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  //Gets studio location ans sercives data for Layout.js
  const allLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items);

  const allServices = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items);

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items);

    const specialOffer = await client
    .getEntries({ content_type: "specialOffer" })
    .then((response) => response.items);

  // Return the post as props
  return {
    props: {
      allLocations,
      allServices,
      aboutPages,
      specialOffer
    },
  };
}
