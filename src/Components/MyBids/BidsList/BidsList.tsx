import React from "react";
import styles from "./BidsList.module.scss";

type BidsListProps = {};

const BidsList: React.FC<BidsListProps> = () => {
  return (
    <div>
      <table className={styles.bids__table}>
        <thead>
          <tr>
            <th>CREATED</th>
            <th>REF ID</th>
            <th>PICK-UP AND DELIVERY</th>
            <th>MILES</th>
            <th>UNIT</th>
            <th>BROKER</th>
            <th>DISPATCHER</th>

            <th>CALL </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              08:01 pm <br />
              09/11/2023
            </td>
            <td>
              12191 <br /> Pro#Ship
            </td>
            <td>
              Hammond, IN 46327 <br />
              Channahon, IL 60410
            </td>
            <td>48 mi</td>
            <td>
              WOO9 <br />
              $485
            </td>
            <td>
              AIm transfer and sto...
              <br />
              $485{" "}
            </td>
            <td>
              Johny W<br />
              dispatch@wiserinc.us
            </td>
            <td>
              <img src={phoneIcon} alt="phone-icon" />
            </td>
          </tr>

          <tr>
            <td>
              08:01 pm <br />
              09/11/2023
            </td>
            <td>
              12191 <br /> Pro#Ship
            </td>
            <td>
              Hammond, IN 46327 <br />
              Channahon, IL 60410
            </td>
            <td>48 mi</td>
            <td>
              WOO9 <br />
              $485
            </td>
            <td>
              AIm transfer and sto...
              <br />
              $485{" "}
            </td>
            <td>
              Johny W<br />
              dispatch@wiserinc.us
            </td>
            <td>
              <img src={phoneIcon} alt="phone-icon" />
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        current={currentPagination}
        onChange={handlePaginationChange}
        total={50}
        className={styles.bids__block__navPage}
      />
    </div>
  );
};
export default BidsList;
