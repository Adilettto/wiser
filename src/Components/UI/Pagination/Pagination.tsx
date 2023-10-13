import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./Pagination.module.scss";

const Paginations: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(1);

  const onChange = (page: number) => navigate(`/load/page/${page}`);

  return (
    <div className="">
      <Pagination
        className={styled.pagination}
        itemRender={(pageNumber, _, a) => (
          <span
            className={pageNumber === active ? styled.active : ""}
            onClick={() => setActive(pageNumber)}
          >
            {a}
          </span>
        )}
        onChange={onChange}
        defaultCurrent={1}
        total={50}
      />
    </div>
  );
};

export default Paginations;
