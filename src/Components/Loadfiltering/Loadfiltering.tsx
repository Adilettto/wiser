import Button from "Components/UI/Button/Button";
import Paginations from "Components/UI/Pagination/Pagination";
import Deliver from "./Deliver/Deliver";
import Match from "./Match/Match";
import Miles from "./Miles/Miles";
import PickUp from "./PickUp/PickUp";
import Vehicle from "./Vehicle/Vehicle";
import Brokerages from "./Brokerage/Brokerage";
import { useNavigate } from "react-router";
import styles from "./Loadfiltering.module.scss";
import { useState } from "react";
import { AddLoad } from "Components/AddLoad/AddLoad";

const Loadfiltering: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate("/load/1");
  };
  return (
    <div className={styles.loadfilter}>
      <div className={styles.loadfilter__contant}>
        <div className={styles.loadfilter__contant__header}>
          <h2 className={styles.loadfilter__contant__header_text}>Loadboard</h2>
          <div className={styles.loadfilter__contant__header_loadbar}>
            <Button
              className={styles.loadfilter__contant__header__loadbar_addload}
              onClick={() => setOpen(true)}
            >
              Add load
            </Button>

            <AddLoad
              visible={open}
              onCancel={() => setOpen(false)}
              setOpen={setOpen}
            />
            <Button
              className={styles.loadfilter__contant__header__loadbar_capacity}
            >
              Capacity search
            </Button>
          </div>
        </div>

        <table className={styles.loadfilter__contant__table}>
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
            <tr onClick={goToDetailPage}>
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

            <tr onClick={goToDetailPage}>
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
        <div className={styles.loadfilter__contant__blockpagination}>
          <Paginations link="load" />
        </div>
      </div>
      <div className={styles.loadfilter__background}></div>
    </div>
  );
};

export default Loadfiltering;
