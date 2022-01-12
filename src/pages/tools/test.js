import React from "react";
import { Sidebar } from '../../components/sidebar'
import Layout from "@theme/Layout";

export default function Tools() {
  return (
    <Layout
      title="Tools"
      description=""
    >
      <div style={{display: "flex"}}>
      <Sidebar display="inline-box"></Sidebar>
      <h1>THIS IS TEST PAGE</h1>
      </div>
    </Layout>
  );
}