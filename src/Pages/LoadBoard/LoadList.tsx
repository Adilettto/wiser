import Home from "Containers/Home/Home";
import Sidebar from "Components/Sidebar/Sidebar";
import React from "react";
import Loadfiltering from "Components/Loadfiltering/Loadfiltering";
import { Layout } from "Components/Layout/Layout";

export const LoadListPage: React.FC = () => {
  return (
    <Layout>
      <Loadfiltering />
    </Layout>
  );
};
