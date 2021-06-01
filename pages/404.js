import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

const Error = ()  => {
  const classes = useStyles();
  return (
    <div>
      Hello World! This is an error page!
    </div>
  );
}

export default Error;
