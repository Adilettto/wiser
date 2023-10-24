import { Layout } from "Components/Layout/Layout";
import Settimgs from "Containers/Settings/Settimgs";
import { useState } from "react";

export const Settings: React.FC = () => {
  const [height, setHieght] = useState(false);
  return (
    <Layout update={height}>
      <Settimgs setUpdate={setHieght} update={height} />
    </Layout>
  );
};
