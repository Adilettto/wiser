import React from "react";
import styles from "./HistoryBids.module.scss";
import { useNavigate } from "react-router";

const HistoryBids: React.FC = () => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate("/bids");
  };

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
            <th>STATUS </th>
          </tr>
        </thead>

        <tbody>
          <tr onClick={goToDetailPage}>
            <td>
              08:01 pm <br />
              09/11/2023
            </td>
            <td>
              12191 <br /> Pro#Ship
            </td>
            <td>
              Hammond, IN <br /> 46327 Channahon, IL 60410
            </td>
            <td>48 mi</td>
            <td>
              WOO9 <br />
              $485
            </td>
            <td>
              AIm transfer <br /> and sto... $485{" "}
            </td>
            <td>
              Johny W<br />
              dispatch@wiserinc.us
            </td>
            <td >
              <p className={styles.status}>Refuse</p>
            </td>
          </tr>

          <tr onClick={goToDetailPage}>
            <td>
              08:01 pm <br />
              09/11/2023
            </td>
            <td>
              12191 <br /> Pro#Ship
            </td>
            <td>
              Hammond, IN <br /> 46327 Channahon, IL 60410
            </td>
            <td>48 mi</td>
            <td>
              WOO9 <br />
              $485
            </td>
            <td>
              AIm transfer <br /> and sto... $485{" "}
            </td>
            <td>
              Johny W<br />
              dispatch@wiserinc.us
            </td>
            <td>
            <p className={styles.status}>Refuse</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default HistoryBids;