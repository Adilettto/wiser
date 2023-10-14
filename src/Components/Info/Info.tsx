import styles from "./Info.module.scss";
import { ReactComponent as DollarSign } from "../../Assets/dollar.svg";
import { Input } from "antd";
import { Button } from "antd";

export const Info = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__box}>
          <ul className={styles.container__ul}>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                {" "}
                Empty miles{" "}
              </span>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
                <hr className={styles.dollar__sign} />
              </div>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Loaded miles{" "}
              </span>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Broker price
              </span>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Driver price
              </span>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>Revenue</span>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
              <div className={styles.dollar}>
                <Input
                  placeholder="default size"
                  prefix={<DollarSign className={styles.dollar__sign} />}
                />
              </div>
            </li>
          </ul>
          <div className={styles.button}>
            <Button className={styles.button__primary} type="primary">
              <span className={styles.container__list__title}>Place bid</span>
            </Button>
          </div>
        </div>
        <div className={styles.transitTime}>
          <div className={styles.transitTime__name}>
            <p className={styles.transitTime__name__text}>TRANSIT TIME</p>

            <hr className={styles.transitTime__hr} />
            <div className={styles.transitTime__time}>
              <p>TIME LEFT TO DELIEVER</p>
              <p className={styles.transitTime__time__p}>5 hours 32 minutes</p>
            </div>
          </div>
          <div className={styles.transitTime__h}></div>
          <div className={styles.transitTime__dispatch}>
            <p>DISPATCHER</p>
            <p>UNIT</p>
            <p>BROCKER</p>
          </div>
          <div className={styles.transitTime__h}></div>
          <div className={styles.transitTime__p}>
            <p>No bids have been placed on this load</p>
          </div>
        </div>
      </div>
      <div className={styles.p}>
        <p>Comment...</p>
      </div>
    </div>
  );
};
