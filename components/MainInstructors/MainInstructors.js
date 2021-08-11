import React from "react"
import ReactMarkdown from "react-markdown"
import style from "components/Markdown/markdown.module.css"
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Image from "next/image";
import styling from "./MainInstructors.module.css";

const useStyles = makeStyles(styles);

export default function MainInstructors({ instructors }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.indexRaised)}>
      <div className={classes.container}>
      <div className={styling.infoDivRow}>
          <div style={{alignSelf: "auto"}} className={classes.infoContent}>
        <div className={classes.title}>{instructors.fields.name}</div>
        <div style={{ marginTop: "24px", width: "100%", display: "block", objectFit: "cover" }}>
        <Image
          src={`https:${instructors.fields.avatar.fields.file.url}`}
          height={instructors.fields.avatar.fields.file.details.image.height}
          width={instructors.fields.avatar.fields.file.details.image.width}
          alt={instructors.fields.name} />
          </div>
          </div>
          
          <div className={classes.infoContent}>
        <ReactMarkdown className={style.reactMarkDown}>{instructors.fields.fullBio}</ReactMarkdown>
        </div>
      </div>
    </div>
    </div>
  )
}