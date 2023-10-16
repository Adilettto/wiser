import React, { useState } from "react";
import { ReactComponent as Frame } from "../../../Assets/Frame.svg";
import Search from "Components/UI/Search/Search";
import styled from "./Vehicle.module.scss";

const Vehicle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.vehicle}>
      Vehicle <Frame onClick={() => setOpen(true)} />
      {open && <Search setOpen={setOpen} />}
    </div>
  );
};

export default Vehicle;
