import React, { useState } from "react";
import { ReactComponent as Script } from "Assets/script.svg";
import Maxmiles from "Components/UI/Search/Maxmiles/Maxmiles";
import styled from "./Miles.module.scss";

const Miles: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.maxmiles}>
      Miles <Script onClick={() => setOpen(true)} />
      {open && <Maxmiles setOpen={setOpen} />}
    </div>
  );
};

export default Miles;
