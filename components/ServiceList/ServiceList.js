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
import Image from 'next/image';
import CardImage from "components/Card/CardImage.js";

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
      {services.slice(0, 3).map((service) => (
        <GridItem xs={12} sm={6} md={4} key={service.sys.id}>
          <Link
            href={`/services/${service.fields.slug}`}
            className={classes.serviceCardLink}>

            <Card>
              <CardImage
                src={`https:${service.fields.image.fields.file.url}`}
                alt={service.fields.service} />
              <CardBody style={{ height: "175px" }}>
                <h4 className={classes.cardTitle}>{service.fields.service}</h4>
                <p style={service.fields.shortDescription.length > 120 ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } : { fontSize: "14px" }}>{service.fields.shortDescription}</p>
                <Button color="primary" round>Learn More</Button>
              </CardBody>
            </Card>

          </Link>
        </GridItem>
      ))}
    </GridContainer>
  );
}
