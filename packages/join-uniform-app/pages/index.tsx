// import { LayoutLanding, LoadingSpinner } from "@join-uniform/components";
import { NextSFC } from "next";
import Router from "next/router";
// import React from "react";

const IndexPage: NextSFC = () => {
  return null;
};

IndexPage.getInitialProps = async ctx => {
  const { res } = ctx;

  if (res) {
    res.writeHead(302, { Location: "/admin/entry-manager" });
    res.end();
    return;
  }

  Router.push("/admin/entry-manager");
};

export default IndexPage;
