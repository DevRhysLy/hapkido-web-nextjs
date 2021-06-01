import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
//components used
import Layout from "components/Layout/Layout.js";

const useStyles = makeStyles(styles);

const index = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        Hello World!
    </div><div>
        Hello World!
    </div><div>
        Hello World!
    </div><div>
        Hello World!
    </div>
    </Layout>
  );
}

export default index;
