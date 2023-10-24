import { ReactComponent as Arrowright } from "Assets/arrowright.svg";
import { ReactComponent as Logo } from "Assets/logocompany.svg";
import Accounting from "Components/Setting/Accouting/Accounting";
import NameAdress from "Components/Setting/NameAdress/NameAdress";
import Emailing from "Components/Setting/Emailing/Emailing";
import Rateconfirmation from "Components/Setting/Rateconfirmation/Rateconfirmation";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__blockfirst}>
        <div className={styles.content__blockfirst_logoblock}>
          <div className={styles.content__blockfirst_logoblock_relative_logo}>
            <Logo />
            <h3>Company Logo</h3>
          </div>
        </div>

        <ul className={styles.content__blockfirst_listblock}>
          <li>
            Main
            <br />
            Company Information
            <Arrowright />
          </li>
          <li>
            Sms <br />
            Message Templates
            <Arrowright />
          </li>
          <li>
            Email <br />
            Bid and Notification Templates
            <Arrowright />
          </li>
          <li>
            Communications <br />
            Phone Settings
            <Arrowright />
          </li>
        </ul>
      </div>

      <div className={styles.content__blocksecond}>
        <NameAdress />
        <Accounting />
        <Emailing />
        <Rateconfirmation />
      </div>
    </div>
  );
};

export default Company;
