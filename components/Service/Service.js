import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import classNames from "classnames";
import Parallax from "components/Parallax/Parallax.js";
import style from "components/Markdown/markdown.module.css"
import ResponsivePlayer from "components/ResponsivePlayer/ResponsivePlayer.js";

const useStyles = makeStyles(styles);

export default function Service({ services }) {
  const classes = useStyles();
  return (
    <div>
      <Parallax image={`https:${services.fields.image.fields.file.url}`} alt={services.fields.service} responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <h1 className={classes.title}>{services.fields.service}</h1>
            <h3 className={classes.subtitle}>
            {services.fields.shortDescription}
            </h3>
          </div>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.indexRaised)}>
      <div className={classes.container}>
        <div className={classes.jumboHeadingContainer}>
          <h1 className={classes.jumboHeading}>{services.fields.service}</h1>
        </div>
        <ResponsivePlayer url={services.fields.url ? services.fields.url : "https://youtu.be/xQI30nECz0Q"}/>
          <ReactMarkdown className={style.reactMarkDown}>{services.fields.longDescription}</ReactMarkdown>
          </div>
          </div>
        </div>
  )
}