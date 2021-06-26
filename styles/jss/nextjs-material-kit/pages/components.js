import { container } from "styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0",
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
  h2:{
    color: "#2196f3",  
  },
  contactLink:{
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
    margin: "24px",
    borderTop: "solid",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    },
  },
  infoDivColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "24px",
    borderTop: "solid",
  },
  indexRaised: {
    marginTop: "-60px",
    background: "white",
    paddingTop: "1px",
  },
  jumboHeading: {
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "96px",
    fontWeight: "400",
    lineHeight: "50px",
    textTransform: "none",
    "@media only screen and (max-width: 900px)": {
      fontSize: "56px",
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
    "@media only screen and (max-width: 900px)": {
      fontSize: "24px",
    },
  },
  h4: {
    fontSize: "28px",
    "@media only screen and (max-width: 900px)": {
      fontSize: "18px",
    },
  },
  linkBtn:{
    color: "white",
    "&:hover": {
      color: "#212121",
    }, 
  },
  serviceCardLink:{
     "&:hover": {
      cursor: "pointer",
    }, 
  },
};

export default componentsStyle;
