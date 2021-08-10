import React from "react"
import ReactMarkdown from "react-markdown"
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import classNames from "classnames";
import Parallax from "components/Parallax/Parallax.js";
import MainInstructorsAvatar from "components/MainInstructorsAvatar/MainInstructorsAvatar";
import style from "components/Markdown/markdown.module.css"
import GoogleMapLocation from "components/GoogleMapLocation/GoogleMapLocation";


const useStyles = makeStyles(styles);

export default function StudioLocation({ studioLocation }) {
    const classes = useStyles();
    return (
        <div>
          <Parallax image={`https:${studioLocation.fields.bannerImage.fields.file.url}`} responsive={true}>
            <div className={classes.parallaxContainer}>
              <div className={classes.brand}>
                <h1 className={classes.title}>{studioLocation.fields.location}</h1>
              </div>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.indexRaised)}>
          <div className={classes.container}>
            <div className={classes.jumboHeadingContainer}>
              <h1 className={classes.jumboHeading}>{studioLocation.fields.description}</h1>
            </div>
              <ReactMarkdown className={style.reactMarkDown}>{studioLocation.fields.body}</ReactMarkdown>
              {/* <GoogleMapLocation /> */}
              
              <MainInstructorsAvatar instructors={studioLocation.fields.mainInstructor} />
              </div>
              </div>
            
        </div>
    )
}