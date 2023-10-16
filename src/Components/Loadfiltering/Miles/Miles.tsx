import React, { useState } from "react";
import { ReactComponent as Frame } from "../../../Assets/Frame.svg";
import Maxmiles from "Components/UI/Search/Maxmiles/Maxmiles";
import styled from "./Miles.module.scss";

const Miles: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.maxmiles}>
      Miles <Frame onClick={() => setOpen(true)} />
      {open && <Maxmiles setOpen={setOpen} />}
    </div>
  );
};

export default Miles;
