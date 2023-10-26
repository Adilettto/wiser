import React, { useState } from "react";
import { ReactComponent as Script } from "Assets/script.svg";
import Search from "Components/UI/Search/Search";
import styled from "./Match.module.scss";

const Match = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styled.match}>
      Match <Script onClick={() => setOpen(true)} />
      {open && <Search setOpen={setOpen} />}
    </div>
  );
};

export default Match;
