import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import index from "styles/jss/nextjs-material-kit/pages/components.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle, cardLink, cardSubtitle } from "styles/jss/nextjs-material-kit.js";
import CardHeader from "components/Card/CardHeader.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  index
};

const useStyles = makeStyles(styles);

export default function PostList({ posts = [] }) {
  const classes = useStyles();
  //sorts the posts by date
  const sortedPosts = posts.slice().sort((a, b) => new Date(b.fields.publishDate) - new Date(a.fields.publishDate));
  const firstElement = sortedPosts.shift();
  { console.log(firstElement.fields.description.length) }
  return (
    <div>
      <Link href={`/blog/${firstElement.fields.slug}`}>
        <a className={classes.serviceCardLink} >
          <Card>
            <CardHeader color="warning" style={{ marginBottom: "18px" }}>Latest Post</CardHeader>
            <img
              style={{ height: "250px", width: "100%", display: "block", objectFit: "cover" }}
              className={classes.imgCardTop}
              src={firstElement.fields.bannerImage.fields.file.url}
              alt={firstElement.fields.title}
            />
            <CardBody>
              <h4 className={classes.cardTitle}>{firstElement.fields.title}</h4>
              <p>Published: {new Date(firstElement.fields.publishDate).toDateString()}</p>
              <p>By: {firstElement.fields.author.fields.name}</p>
              <p>{firstElement.fields.description}</p>
              <a>Learn More »</a>

            </CardBody>
          </Card>
        </a>
      </Link>
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
  )
}