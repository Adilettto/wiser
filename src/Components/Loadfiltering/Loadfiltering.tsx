import Button from "Components/UI/Button/Button";
import Paginations from "Components/UI/Pagination/Pagination";
import Deliver from "./Deliver/Deliver";
import Match from "./Match/Match";
import Miles from "./Miles/Miles";
import PickUp from "./PickUp/PickUp";
import Vehicle from "./Vehicle/Vehicle";
import Brokerages from "./Brokerage/Brokerage";
import styles from "./Loadfiltering.module.scss";

const Loadfiltering: React.FC = () => {
  return (
    <div className={styles.loadfilter}>
      <div className={styles.loadfilter__header}>
        <h2 className={styles.loadfilter__header_text}>Loadboard</h2>
        <div className={styles.loadfilter__header_loadbar}>
          <Button className={styles.loadfilter__header__loadbar_addload}>
            Add load
          </Button>
          <Button className={styles.loadfilter__header__loadbar_capacity}>
            Capacity search
          </Button>
        </div>
      </div>

      <table className={styles.loadfilter__table}>
        <thead>
          <tr>
            <th>Created</th>
            <th>
              <PickUp />
            </th>
            <th>
              <Deliver />
            </th>
            <th>
              <Vehicle />
            </th>
            <th>
              <Miles />
            </th>
            <th>
              <Match />
            </th>
            <th>Pating</th>
            <th>
              <Brokerages />
            </th>
            <th>Bids </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>05:14 am</td>
            <td>
              miami, <br /> FL 33166
            </td>
            <td>
              Orlando, <br /> FL 32827
            </td>
            <td>
              CARGO <br /> VAN
            </td>
            <td>240</td>
            <td>0/0</td>
            <td>cdienoed</td>
            <td>
              (S) PINNACLE <br /> PRO LOGISTIC...
            </td>
            <td>cdienoed</td>
          </tr>

          <tr>
            <td>05:14 am</td>
            <td>
              miami, <br /> FL 33166
            </td>
            <td>
              Orlando, <br /> FL 32827
            </td>
            <td>
              CARGO <br /> VAN
            </td>
            <td>240</td>
            <td>0/0</td>
            <td>cdienoed</td>
            <td>
              (S) PINNACLE <br /> PRO LOGISTIC...
            </td>
            <td>cdienoed</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.loadfilter__blockpagination}>
        <Paginations />
      </div>
    </div>
  );
};

export default Loadfiltering;
