import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle, cardLink, cardSubtitle } from "styles/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle
};

const useStyles = makeStyles(styles);

export default function MainInstructorList({ instructors = [] }) {

  const classes = useStyles();
  return (
    <GridContainer spacing={4}>
      {instructors.map((instructor) => (
        <GridItem xs={12} sm={6} md={4} key={instructor.sys.id}>
          <Card >
            <img
              style={{ height: "180px", width: "100%", display: "block", objectFit: "cover" }}
              className={classes.imgCardTop}
              src={instructor.fields.avatar.fields.file.url}
              alt={instructor.fields.title}
            />
            <CardBody>
              <h4 className={classes.cardTitle}>{instructor.fields.title}</h4>
              <p>{instructor.fields.bio}</p>
              <Link href={`/our-master-and-instructors/${instructor.fields.slug}`}>
                <a>Learn More »</a>
              </Link>
            </CardBody>
          </Card>

        </GridItem>
      ))}
    </GridContainer>
  )
}