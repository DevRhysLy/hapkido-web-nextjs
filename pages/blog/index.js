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
import PostList from "components/PostList/PostList.js";
import Card from "components/Card/Card.js";
import { cardTitle, cardLink, cardSubtitle } from "styles/jss/nextjs-material-kit.js";
import CardHeader from "components/Card/CardHeader.js";

import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

const useStyles = makeStyles(styles);

const index = ({ posts, studioLocations, services, aboutPages }) => {
  const classes = useStyles();
  const sortedPosts = posts.slice().sort((a, b) => new Date(b.fields.publishDate) - new Date(a.fields.publishDate));
  const firstElement = sortedPosts.shift();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Parallax image={firstElement.fields.bannerImage.fields.file.url} responsive={true}>
        <div className={classes.container}>
              <div className={classes.brand}>
                Our Latest Blog
                <h1 className={classes.title}>{firstElement.fields.title}</h1>
                <h3 className={classes.subtitle}>
                  {firstElement.fields.description}
                </h3>
                <Link href={`/blog/${firstElement.fields.slug}`}>
                  <a className={classes.serviceCardLink}>
                    Read More
                  </a>
                </Link>
              </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.indexRaised)}>
      <div className={classes.jumboHeadingContainer}>
          <h1 className={classes.jumboHeading}>All Blogs</h1>
        </div>
        <div className={classes.infoDivRow}>
          <div className={classes.infoContent}>
            <GridContainer spacing={4}>
              {sortedPosts.map((post) => (
                <GridItem xs={12} sm={6} md={4} key={post.sys.id}>
                  <Link href={`/blog/${post.fields.slug}`}>
                    <a className={classes.serviceCardLink} >
                      <Card >
                        <img
                          style={{ height: "180px", width: "100%", display: "block", objectFit: "cover" }}
                          className={classes.imgCardTop}
                          src={post.fields.bannerImage.fields.file.url}
                          alt={post.fields.title}
                        />
                        <CardBody>
                          <h4 className={classes.cardTitle}>{post.fields.title}</h4>
                          <p>Published: {new Date(post.fields.publishDate).toDateString()}</p>
                          <p>By: {post.fields.author.fields.name}</p>
                          {/*to do - add ternary if string is larger than 120 then do: 
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    */}
                          <p>{post.fields.description}</p>
                          <a>Learn More »</a>
                        </CardBody>
                      </Card>
                    </a>
                  </Link>
                </GridItem>
              ))}
            </GridContainer>
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

  const services = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)
  return {
    props: {
      posts,
      studioLocations,
      services,
      aboutPages
    },
  }
}

export default index;
