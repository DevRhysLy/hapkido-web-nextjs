import React, { Component } from "react";
import Router from "next/router";

export default class Error extends Component {
  componentDidMount = () => {
    Router.push("/");
  };

  render() {
    return <div />;
  }
}
