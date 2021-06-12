import React from "react"
import ReactMarkdown from "react-markdown"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle, cardLink, cardSubtitle } from "styles/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import Link from "next/link";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const styles = {
    ...imagesStyles,
    cardTitle,
    cardLink,
    cardSubtitle
};

const useStyles = makeStyles(styles);

export default function StudioLocation({ studioLocation }) {
    const classes = useStyles();
    return (
        <div>
            <header>
                <h1>{studioLocation.fields.location}</h1>
            </header>
            <section>
                <ReactMarkdown>{studioLocation.fields.body}</ReactMarkdown>
            </section>
            {console.log(studioLocation.fields.mainInstructor.fields)}
            {/* <MainInstructor instructor={post.fields.author} /> */}
            <GridContainer spacing={4}>
                <GridItem xs={12} sm={6} md={4}>
                    <Card >
                        <img
                            style={{ height: "180px", width: "100%", display: "block", objectFit: "cover" }}
                            className={classes.imgCardTop}
                            src={studioLocation.fields.mainInstructor.fields.avatar.fields.file.url}
                            alt={studioLocation.fields.mainInstructor.fields.name}
                        />
                        <CardBody>
                            <h4 className={classes.cardTitle}>{studioLocation.fields.mainInstructor.fields.name}</h4>
                            <p>{studioLocation.fields.mainInstructor.fields.bio}</p>
                            <Link href={`/our-master-and-instructors/${studioLocation.fields.mainInstructor.fields.slug}`}>
                                <a>Learn More »</a>
                            </Link>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    )
}