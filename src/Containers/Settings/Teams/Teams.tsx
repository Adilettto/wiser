import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import Button from "Components/UI/Button/Button";
import styles from "./Teams.module.scss";

const Teams = () => {
  return (
    <div className={styles.blockteam}>
      <div className={styles.blockteam__text}>
        <h3>You have 2 teams</h3>
        <Button className={styles.blockteam__text_btnfirst}>
          <PlusOutlined />
          Create a New Team
        </Button>
      </div>

      <div className={styles.blockteam__flex}>
        <div className={styles.blockteam__flex__bgshared}>
          <div className={styles.blockteam__flex__bgshared__center}>
            <h4>Shared 1 groups</h4>

            <div className={styles.blockteam__flex__bgshared__center__boxfirst}>
              <p
                className={
                  styles.blockteam__flex__bgshared__center__boxfirst_textitem
                }
              >
                Shared team
              </p>
              <span
                className={
                  styles.blockteam__flex__bgshared__center__boxfirst_spantext
                }
              >
                6 users, 0 units
              </span>
            </div>
            <Button
              className={styles.blockteam__flex__bgshared__center_btnsecond}
            >
              Viev All Groups
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
