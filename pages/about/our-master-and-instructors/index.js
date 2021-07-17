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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import CardBody from "components/Card/CardBody.js";
import Contact from "components/Contact/Contact.js";
import MainInstructorsList from "components/MainInstructorsList/MainInstructorsList.js";

const useStyles = makeStyles(styles);

const InstructorPage = ({ posts, studioLocations, services, instructors, aboutPages, blackbelts = [] }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Parallax image="/img/hca-banner-2.jpeg" responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <h1 className={classes.title}>Hapkido College of Australia</h1>
            <h3 className={classes.subtitle}>
              A passion for a history of excellence.
            </h3>
          </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.indexRaised)}>
        <div className={classes.container}>
          <div className={classes.jumboHeadingContainer}>
            <h1 className={classes.jumboHeading}>Our Master and Instructors</h1>
          </div>
          <h2 className={classes.h2}></h2>
          <h3 >Meet the Master and Instructors of HCA!</h3>
          <div>
          </div>
          <MainInstructorsList instructors={instructors} />
          <h3>Meet our Black Belt Club</h3>
          {blackbelts.map((blackbelt) =>
            <li>
              {blackbelt.fields.blackbeltName}
            </li>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all entries of content_type that is wanted
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  const studioLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)

  const services = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

  const instructors = await client
    .getEntries({ content_type: "mainInstructor" })
    .then((response) => response.items)

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)

  const blackbelts = await client
    .getEntries({ content_type: "blackbelts" })
    .then((response) => response.items)
  return {
    props: {
      posts,
      studioLocations,
      services,
      instructors,
      aboutPages,
      blackbelts
    },
  }
}

export default InstructorPage;
