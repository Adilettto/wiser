import React, { useState } from "react";
import { ReactComponent as Search } from "../../../../Assets/search.svg";
import Button from "Components/UI/Button/Button";
import { Input } from "antd";

import styled from "./Delivermodal.module.scss";

type DeliverProps = {
  setOpen: (open: boolean) => void;
};

const Delivermodal: React.FC<DeliverProps> = ({ setOpen }) => {
  const [mode, setMode] = useState("inline");
  const changeMode = () => {
    setMode(mode ? "vertical" : "inline");
  };
  return (
    <div className={styled.container}>
      <div className={styled.container__backg}>
        <h4 className={styled.container__backg__text}>Search states</h4>
        <div className={styled.container__backg__registr}>
          <Input
            placeholder="Search"
            className={styled.container__backg__registr_input}
          />
          <Search className={styled.container__backg__registr_icon} />
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

export default Delivermodal;
