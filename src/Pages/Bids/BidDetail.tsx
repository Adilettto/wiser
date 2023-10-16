import React from "react";
import { Layout } from "Components/Layout/Layout";
import { LoadboardEmails } from 'Containers/LoadboardEmails/LoadboardEmails';

export const LoadDetailPage: React.FC = () => {
  return (
    <Layout>
      <LoadboardEmails />
    </Layout>
  );
};