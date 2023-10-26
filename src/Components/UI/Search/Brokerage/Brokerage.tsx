import React, { useState } from "react";
import Button from "Components/UI/Button/Button";
import { Input, Switch } from "antd";

import styled from "./Brokerage.module.scss";

type BrokerageProps = {
  setOpen: (open: boolean) => void;
};

const Brokerage: React.FC<BrokerageProps> = ({ setOpen }) => {
  const [mode, setMode] = useState("inline");
  const changeMode = () => {
    setMode(mode ? "vertical" : "inline");
  };
  return (
    <div className={styled.container}>
      <div className={styled.container__backg}>
        <h4 className={styled.container__backg__text}>Broker name </h4>
        <div className={styled.container__backg__registr}>
          <Input
            defaultValue="Start input..."
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

export default Brokerage;
