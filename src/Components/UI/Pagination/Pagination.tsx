import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./Pagination.module.scss";

type PaginationsProps = {
  link: string;
  className?: string;
};
const Paginations: React.FC<PaginationsProps> = ({ link, className }) => {
  const [active, setActive] = useState<number>(1);
  const navigate = useNavigate();

  const onChange = (page: number) => navigate(`/${link}/?page=${page}`);

  return (
    <div className={className}>
      <Pagination
        className={styled.pagination}
        defaultPageSize={20}
        showSizeChanger={false}
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
        total={500}
      />
    </div>
  );
};

export default Paginations;
