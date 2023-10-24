import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./Pagination.module.scss";

type PaginationsProps = {
  link: string;
};
const Paginations: React.FC<PaginationsProps> = ({ link }) => {
  const [active, setActive] = useState<number>(1);
  const navigate = useNavigate();

  const onChange = (page: number) => navigate(`/${link}/?page=${page}`);

  return (
    <div>
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
