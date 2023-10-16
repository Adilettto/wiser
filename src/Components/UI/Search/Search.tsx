import React, { useState } from "react";
import { Switch } from "antd";

import Button from "../Button/Button";
import SelectField from "Components/Select/Select";

import styled from "./Search.module.scss";

type SearchProps = {
  setOpen: (open: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ setOpen }) => {
  const [mode, setMode] = useState("inline");
  const changeMode = () => {
    setMode(mode ? "vertical" : "inline");
  };

  return (
    <div className={styled.search}>
      <div className={styled.search__contant}>
        <h4 className={styled.search__contant__title}>Search vehicle type</h4>
        <div className={styled.search__contant__registration}>
          <SelectField />
          <div className={styled.search__contant__registration_switch}>
            <Switch
              onChange={changeMode}
              className={styled.search__contant__registration_switchItem}
            />
            <p className={styled.search__contant__registration_switch_text}>
              Exclude?
            </p>
          </div>
        </div>
        <Button
          className={styled.search__contant__btn}
          onClick={() => setOpen(false)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Search;
