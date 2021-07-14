import React from "react"
import ReactMarkdown from "react-markdown"
import MainInstructorsAvatar from "components/MainInstructorsAvatar/MainInstructorsAvatar.js"
import classNames from "classnames";
import style from "components/Markdown/markdown.module.css"
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.indexRaised)}>
      <div className={classes.container}>
        <div style={{ marginTop: "180px", textAlign: "center" }} className={classes.title}>{post.fields.title}</div>
        <img
          style={{ marginTop: "24px", height: "650px", width: "100%", display: "block", objectFit: "cover" }}
          src={post.fields.bannerImage.fields.file.url}
          alt={post.fields.title} />
          <div>{new Date(post.fields.publishDate).toDateString()}</div>
          <ReactMarkdown className={style.reactMarkDown}>{post.fields.body}</ReactMarkdown>
          <MainInstructorsAvatar instructors={post.fields.author} />
      </div>
    </div>
  )
}