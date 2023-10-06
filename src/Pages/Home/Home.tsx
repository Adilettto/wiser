import Home from "Containers/Home/Home";
import Sidebar from "Components/Sidebar/Sidebar";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Home />
      <Sidebar />
    </div>
  );
};
