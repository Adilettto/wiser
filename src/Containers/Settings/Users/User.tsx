import { ReactComponent as Pen } from "Assets/pen.svg";
import Paginations from "Components/UI/Pagination/Pagination";
import Button from "Components/UI/Button/Button";
import { useState } from "react";
import Modal from "Components/UI/Modal/Edituser";
import styles from "./User.module.scss";

const User = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.blocktable}>
      <table className={styles.blocktable__table}>
        <thead>
          <tr>
            <th>User</th>
            <th>REAL NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER </th>
            <th>ROLE</th>
            <th>STATUS</th>
            <th>EDIT</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cristiano</td>
            <td>Ronaldo</td>
            <td>CristianoRon@wiserinc.us</td>
            <td>2020220220</td>
            <td>Dispatcher</td>
            <td>
              <Button className={styles.blocktable__table__activebtn}>
                Active
              </Button>
            </td>
            <td>
              <Pen onClick={() => setOpen(true)} />
              {open && <Modal setOpen={setOpen} />}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.blocktable__pagination}>
        <Paginations link="settings" />
      </div>
    </div>
  );
};

export default User;
