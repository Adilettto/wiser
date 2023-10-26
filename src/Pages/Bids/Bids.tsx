import { Layout } from "Components/Layout/Layout";
import { MyBids } from "Containers/MyBids/MyBids";
import React from "react";

export const Bids: React.FC = () => {
  return (
    <Layout>
      <MyBids />
    </Layout>
  );
};
