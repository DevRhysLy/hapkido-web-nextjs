import React, { useState, useEffect } from "react";
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
import Card from "components/Card/Card.js";
import Button from 'components/CustomButtons/Button.js';
import Pagination from "react-js-pagination";
import Head from "next/head"
import CardImage from "components/Card/CardImage.js";

const useStyles = makeStyles(styles);

const index = ({ posts, studioLocations, services, aboutPages }) => {
  const classes = useStyles();
  const sortedPosts = posts.slice().sort((a, b) => new Date(b.fields.publishDate) - new Date(a.fields.publishDate));
  const firstElement = sortedPosts.shift();
  const postsPerPage = 6;
  const [activePage, setCurrentPage] = useState(1);
  // Logic for displaying posts for pagination
  const indexOfLastPost = activePage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const renderPosts = currentPost.map((post) => {
    const desc = post.fields.description.length;

    return (
      <GridItem xs={12} sm={6} md={4} key={post.sys.id}>
        <Link href={`/blog/${post.fields.slug}`}>
          <a className={classes.serviceCardLink} >
            <Card style={{ height: "450px" }}>
              <CardImage
                src={`https:${post.fields.bannerImage.fields.file.url}`}
                alt={post.fields.title} />
              <CardBody>
                <h4 style={{ fontSize: "24px", fontWeight: "bold" }}>{post.fields.title}</h4>
                <p>Published: {new Date(post.fields.publishDate).toDateString()}</p>
                <p>By: {post.fields.author.fields.name}</p>
                <p style={desc > 120 ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } : { fontSize: "14px" }}>{post.fields.description}</p>
                <Button color="primary" round>Read More</Button>
              </CardBody>
            </Card>
          </a>
        </Link>
      </GridItem>)
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 650);
  };

  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Head>
        <title>Blogs | Hapkido College of Australia</title>
      </Head>
      {console.log(firstElement)}
      <Parallax image={`https:${firstElement.fields.bannerImage.fields.file.url}`} alt={firstElement.fields.title} responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <div className={classes.blogHead}> Our Latest Blog</div>
            <Link href={`/blog/${firstElement.fields.slug}`} className={classes.title}>
              <div className={classes.simpleHover}>
                <h1 className={classes.title}>{firstElement.fields.title}</h1>
                <h3 className={classes.subtitle}>
                  {firstElement.fields.description}
                </h3>
                <Button color="primary" round>Read More</Button>
              </div>
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
              {renderPosts}
            </GridContainer>

            <Pagination
              activePage={activePage}
              itemsCountPerPage={6}
              totalItemsCount={sortedPosts.length}
              pageRangeDisplayed={6}
              onChange={handlePageChange}
              innerClass={classes.pagination}
              activeClass={classes.paginationActiveLink}
              itemClass={classes.paginationLink}
              linkClass={classes.paginationLink}
              activeLinkClass={classes.paginationActiveLink}
            />
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
