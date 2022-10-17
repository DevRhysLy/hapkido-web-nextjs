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
import LocationCityIcon from '@mui/icons-material/LocationCity';

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  index
};

const useStyles = makeStyles(styles);

export default function MobileIndexPage({ services = [] }) {

  const classes = useStyles();
  return (
    <div>
      What Location are you looking for?
    <GridContainer spacing={4}>
      <GridItem xs={6} sm={4} md={4} key='1'>
          <Link href={'/locations/croydon'}>
            <Button color="primary" round>Croydon</Button>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={4} md={4} key='2'>
          <Link href={'/locations/ermington'}>
            <a className={classes.serviceCardLink} >
            <Button color="primary" round>Ermington</Button>
            </a>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={4} md={4} key='3'>
          <Link href={'/locations/belrose'}>
            <a className={classes.serviceCardLink} >
            <Button color="primary" round>Belrose</Button>
            </a>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={4} md={4} key='3'>
          <Link href={'/services'}>
            <a className={classes.serviceCardLink} >
            <Button color="primary" round>Services</Button>
            </a>
          </Link>
        </GridItem>
    </GridContainer>
    </div>
  )
}
