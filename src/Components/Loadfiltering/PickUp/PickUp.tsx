import React, { useState } from "react";
import { ReactComponent as Frame } from "../../../Assets/Frame.svg";
import PickUpModule from "Components/UI/Search/PickUpModule/PickUpModule";
import styled from "./PickUp.module.scss";

export default function PickUp() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styled.pickUp}>
      Pick-up at <Frame onClick={() => setOpen(true)} />
      {open && <PickUpModule setOpen={setOpen} />}
    </div>
  );
}
