import Sidebar from "Components/Sidebar/Sidebar";
import React, { useState } from "react";
import styles from "./MyBids.module.scss";
import { Button, Pagination, Tabs } from "antd";
import phoneIcon from "../../Assets/phone.svg";

const { TabPane } = Tabs;

export const MyBids = () => {
  const [currentTab, setCurrentTab] = useState<string>("1");
  const [currentPagination, setCurrentPagination] = useState<number>(1);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPagination(page);
  };

  return (
    <div className={styles.bids}>
      <Sidebar />
      <div className={styles.bids__block}>
        <div className={styles.bids__block__header}>
          <h1>My Bids</h1>
          <Button className={styles.bids__block__header__btn}>
            + Add load
          </Button>
        </div>
        <Tabs
          activeKey={currentTab}
          onChange={handleTabChange}
          className={styles.bids__block__tabs}
        >
          <TabPane
            tab={<div className={styles.bids__block__tabs__tab}>Pending</div>}
            key="1"
          >
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
                  <td>Hammond, IN 46327 <br/>Channahon, IL 60410</td>
                  <td>
                  48 mi
                  </td>
                  <td>WOO9 <br/>$485</td>
                  <td>AIm transfer and sto...<br/>$485 </td>
                  <td>Johny W<br/>dispatch@wiserinc.us</td>
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
                  <td>Hammond, IN 46327 <br/>Channahon, IL 60410</td>
                  <td>
                  48 mi
                  </td>
                  <td>WOO9 <br/>$485</td>
                  <td>AIm transfer and sto...<br/>$485 </td>
                  <td>Johny W<br/>dispatch@wiserinc.us</td>
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
          </TabPane>
          <TabPane
            tab={<div className={styles.bids__block__tabs__tab}>History</div>}
            key="2"
          >
            Content 2
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.bids__block__navPage}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
