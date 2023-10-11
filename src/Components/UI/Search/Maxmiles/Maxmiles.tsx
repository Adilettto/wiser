import React, { useState } from "react";
import { ReactComponent as Search } from "../../../../Assets/search.svg";
import Button from "Components/UI/Button/Button";
import { Input, Switch } from "antd";

import styled from "./Maxmiles.module.scss";

type MilesProps = {
  setOpen: (open: boolean) => void;
};

const Maxmiles: React.FC<MilesProps> = ({ setOpen }) => {
  const [mode, setMode] = useState("inline");
  const changeMode = () => {
    setMode(mode ? "vertical" : "inline");
  };
  return (
    <div className={styled.container}>
      <div className={styled.container__backg}>
        <h4 className={styled.container__backg__text}>Max miles out</h4>
        <div className={styled.container__backg__registr}>
          <Input
            defaultValue="1-300"
            className={styled.container__backg__registr_input}
          />

          <Search className={styled.container__backg__registr_icon} />
        </div>
        <div className={styled.container__backg__switch}>
          <Switch onChange={changeMode} />
          <span className={styled.container__backg__switch_match}>Match</span>
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

export default Maxmiles;
