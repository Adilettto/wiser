import React, { useState } from "react";
import { ReactComponent as Script } from "Assets/script.svg";
import Delivermodal from "Components/UI/Search/Delivermodal/Delivermodal";
import styled from "./Deliver.module.scss";

const Deliver = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styled.deliver}>
      Deliver to <Script onClick={() => setOpen(true)} />
      {open && <Delivermodal setOpen={setOpen} />}
    </div>
  );
};

export default Deliver;
