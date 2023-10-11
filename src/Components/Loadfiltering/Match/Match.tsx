import React, { useState } from "react";
import { ReactComponent as Frame } from "../../../Assets/Frame.svg";
import Search from "Components/UI/Search/Search";
import styled from "./Match.module.scss";

const Match = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.match}>
      Match <Frame onClick={() => setOpen(true)} />
      {open && <Search setOpen={setOpen} />}
    </div>
  );
};

export default Match;
