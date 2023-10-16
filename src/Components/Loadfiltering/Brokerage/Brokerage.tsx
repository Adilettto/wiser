import React, { useState } from "react";
import { ReactComponent as Frame } from "../../../Assets/Frame.svg";
import Brokerage from "Components/UI/Search/Brokerage/Brokerage";
import styled from "./Brokerage.module.scss";

const Brokerages = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.brokerage}>
      Brokerage <Frame onClick={() => setOpen(true)} />
      {open && <Brokerage setOpen={setOpen} />}
    </div>
  );
};

export default Brokerages;
