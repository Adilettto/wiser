import React from "react";
import { Layout } from "Components/Layout/Layout";
import { Loadboard } from 'Containers/Load/LoadDetail/Loadboard';

export const LoadDetailPage: React.FC = () => {
  return (
    <Layout>
      <Loadboard />
    </Layout>
  );
};