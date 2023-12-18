import { AddLoad } from "Components/AddLoad/AddLoad";
import Button from "Components/UI/Button/Button";
import Paginations from "Components/UI/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Brokerages from "./Brokerage/Brokerage";
import Deliver from "./Deliver/Deliver";
import styles from "./Loadfiltering.module.scss";
import Match from "./Match/Match";
import Miles from "./Miles/Miles";
import PickUp from "./PickUp/PickUp";
import Vehicle from "./Vehicle/Vehicle";
import { useSelector } from "react-redux";
import { selectOrderList } from "Redux/Order/slice";
import { getOrderList } from "Redux/Order/reducer";
import { useAppDispatch } from "Redux/store";

const Loadfiltering: React.FC = () => {
  const dispatch = useAppDispatch();
  const orderlist = useSelector(selectOrderList);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderList());
  }, []);

  const goToDetailPage = (id: number) => {
    navigate("/load/" + id);
  };
  return (
    <div className={styles.loadfilter}>
      <div className={styles.loadfilter__contant}>
        <div className={styles.loadfilter__contant__header}>
          <h2 className={styles.loadfilter__contant__header_text}>Loadboard</h2>
          <div className={styles.loadfilter__contant__header__loadbar}>
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
              <th>Rating</th>
              <th>
                <Brokerages />
              </th>
              <th>Bids </th>
            </tr>
          </thead>

          <tbody>
            {orderlist?.map((order) => (
              <tr onClick={() => goToDetailPage(order.id)} key={order.id}>
                <td>{order.created_time}</td>
                <td>{order.pick_up_at}</td>
                <td>{order.deliver_to}</td>
                <td>{order.suggested_truck_size}</td>
                <td>{order.miles}</td>
                <td>0/0</td>
                <td>cdienoed</td>
                <td>{order.load_posted_by}</td>
                <td>cdienoed</td>
              </tr>
            ))}
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
