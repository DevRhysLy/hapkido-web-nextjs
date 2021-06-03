import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import comp from "styles/jss/nextjs-material-kit/pages/components.js";
//components used
import Layout from "components/Layout/Layout.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Contact from "components/Contact/Contact.js";
import PostList from "components/PostList/PostList.js"
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
//material styles
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import { cardTitle } from "styles/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  ...comp
};

const useStyles = makeStyles(styles);

const index = ({ posts, studioLocations }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations}>
      <Parallax image="/img/hca-eagles-banner.jpeg" responsive={true}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hapkido College of Australia</h1>
                <h3 className={classes.subtitle}>
                  A passion for a history of excellence.
                </h3>
                <Contact />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.sections}>
          <div className={classes.container}>
          <SectionLogin />
            <div className={classes.title}>
              <h2>Our Services</h2>
              <h3>Come along for a free trial if you are interested in any of our services!</h3>
              <div>
              {/* <PostList posts={posts} /> */}
              </div>
            </div>
          </div>
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

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  const studioLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)
  return {
    props: {
      posts,
      studioLocations
    },
  }
}

export default index;
