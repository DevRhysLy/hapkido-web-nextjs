import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle, cardLink, cardSubtitle } from "styles/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import index from "styles/jss/nextjs-material-kit/pages/components.js";
import Button from 'components/CustomButtons/Button.js';
import CardImage from "components/Card/CardImage.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  index
};

const useStyles = makeStyles(styles);

export default function GalleryList({ imageGallery = [] }) {

  const classes = useStyles();
  return (
    <GridContainer spacing={4}>
      {imageGallery.map((subGallery) => (
        <GridItem xs={12} sm={6} md={4} key={subGallery.sys.id}>
          <Link href={`/gallery/${subGallery.fields.slug}`}>
            <a className={classes.serviceCardLink} >
              <Card>
                <CardImage
                  src={`https:${subGallery.fields.images[0].fields.file.url}`}
                  alt={subGallery.fields.title} />
                <CardBody>
                  <h4 className={classes.cardTitle}>{subGallery.fields.title}</h4>
                  <Button color="primary" round>View Gallery</Button>
                </CardBody>
              </Card>
            </a>
          </Link>
        </GridItem>
      ))}
    </GridContainer>
  )
}
