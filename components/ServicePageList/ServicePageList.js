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

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  index
};

const useStyles = makeStyles(styles);

export default function ServiceList({ services = [] }) {

  const classes = useStyles();
  return (
    <GridContainer spacing={4}>
      {services.map((service) => (
        <GridItem xs={12} sm={6} md={4} key={service.sys.id}>
          <Link href={`/services/${service.fields.slug}`}>
            <a className={classes.serviceCardLink} >
              <Card >
                <img
                  style={{ height: "180px", width: "100%", display: "block", objectFit: "cover" }}
                  className={classes.imgCardTop}
                  src={service.fields.image.fields.file.url}
                  alt={service.fields.service}
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>{service.fields.service}</h4>
                  <p>{service.fields.shortDescription}</p>
                  <a>Learn More »</a>
                </CardBody>
              </Card>
            </a>
          </Link>
        </GridItem>
      ))}
    </GridContainer>
  )
}

{/* <h2>
              <Link href={`/services/${service.fields.slug}`}>
                <a>{service.fields.service}</a>
              </Link>
            </h2>
          <p>{service.fields.shortDescription}</p>
          <p>
            <Link href={`/services/${service.fields.slug}`}>
              <a>Learn More »</a>
            </Link>
          </p> */}