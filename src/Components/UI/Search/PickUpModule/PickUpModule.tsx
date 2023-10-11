import React, { useState } from "react";
import Button from "Components/UI/Button/Button";
import { Input } from "antd";

import styled from "./PickUp.module.scss";

type PickupProps = {
  setOpen: (open: boolean) => void;
};

const PickUpModule: React.FC<PickupProps> = ({ setOpen }) => {
  const [mode, setMode] = useState("inline");
  const changeMode = () => {
    setMode(mode ? "vertical" : "inline");
  };
  return (
    <div className={styled.container}>
      <div className={styled.container__backg}>
        <h4 className={styled.container__backg__text}>Pickup point</h4>
        <div className={styled.container__backg__registr}>
          <Input
            placeholder="Start input..."
            className={styled.container__backg__registr_input}
          />
          <h4 className={styled.container__backg__registr_text}>
            Delivery point
          </h4>
          <Input
            placeholder="Start input..."
            className={styled.container__backg__registr_input}
          />
        </div>

        <Button
          className={styled.container__backg_btn}
          onClick={() => setOpen(false)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default PickUpModule;
