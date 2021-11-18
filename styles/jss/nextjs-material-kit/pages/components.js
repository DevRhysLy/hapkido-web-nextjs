import { container } from "styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  parallaxContainer: {
    marginRight: "48px",
  },
  brand: {
    background: "#ffffff73",
    color: "#212121",
    paddingLeft: "24px",
    borderRadius: "0px 8px 8px 0px",
    paddingRight: "12px",
    paddingBottom: "12px",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    lineHeight: "42px",
    "@media only screen and (max-width: 950px)": {
      fontSize: "56px",
    },
    "@media (max-width: 768px)": {
      fontSize: "46px",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0",
    fontWeight: "400"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  h2: {
    color: "#2196f3",
  },
  contactLink: {
    color: "#016db8",
    "&:hover": {
      color: "#016db8",
      textDecoration: "underline",
    },
  },
  infoDivRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "1280px",
    margin: "0px auto !important",
    float: "none !important",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    },
  },
  infoDivColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",  
    maxWidth: "1280px",
    margin: "0px auto !important",
    float: "none !important",
  },
  indexRaised: {
    marginTop: "-60px",
    background: "white",
    paddingTop: "1px",
    paddingBottom: "20px",
  },
  jumboHeading: {
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "96px",
    fontWeight: "400",
    lineHeight: "100px",
    textTransform: "none",
    "@media only screen and (max-width: 950px)": {
      fontSize: "56px",
    },
    "@media (max-width: 768px)": {
      fontSize: "46px",
    },
  },
  jumboHeadingContainer: {
    marginTop: "85px",
    marginBottom: "85px",
    textAlign: "center",
  },
  buttonGrey: {
    color: "white",
    background: "#212121"
  },
  infoContent: {
    padding: "24px",
    margin: "24px",
    alignSelf: "center",
    width: "100%",
  },
  scaledImg: {
    overflow: "hidden",
    maxWidth: "100%",
    // "@media (max-width: 768px)": {
    //   flexDirection: "column"
    // },
  },
  h3: {
    fontSize: "36px",
    fontWeight: "500",
    "@media only screen and (max-width: 950px)": {
      fontSize: "24px",
    },
  },
  h4: {
    fontSize: "28px",
    "@media only screen and (max-width: 950px)": {
      fontSize: "18px",
    },
  },
  linkBtn: {
    color: "white",
    "&:hover": {
      color: "#212121",
    },
  },
  singleImgDiv: {
    display: "flex",
    justifyContent: "center",
  },
  singleImg: {
    borderRadius: "12px",
    display: "flex",
    maxWidth: "20%",
    "@media only screen and (max-width: 950px)": {
      maxWidth: "50%",
    },
  },
  pagination: {
    display: "flex",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px",
    justifyContent: "center",
  },
  paginationItem: {
    display: "inline",
  },
  paginationLink: {
    color: "#212121",
    float: "left",
    padding: "8px 16px",
    textDecoration: "none",
    listStyle: "none",
    "&:hover": {
      color: "#212121",
      textDecoration: "underline",
    },
  },
  paginationActiveLink: {
    color: "#212121",
    float: "left",
    padding: "8px 16px",
    listStyle: "none",
    background: "#e5e5e5",
    "&:hover, &:focus": {
      color: "#212121",
      textDecoration: "underline",
      fontWeight: "bold",
    },
  },
  simpleHover: {
    "&:hover, &:focus": {
      cursor: "pointer"
    },
  },
  blogHead: {
    fontWeight: "bold",
    fontSize: "18px",
    textDecoration: "underline"
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "1200px",
    listStyle: "none",
    justifyContent: "center",
  },
  li: {
    padding: "12px",
    margin: "12px",
  },
  listDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  galleryContainerIndex: {
    margin: "0px 64px 0px 64px",
    padding: "0px 240px 0px 240px",
    "@media only screen and (max-width: 1240px)": {
      margin: "0px 64px 0px 64px",
      padding: "0px 64px 0px 64px",
    },
  },
  infoContainer: {
    borderTop: "solid",
  },
};

export default componentsStyle;
