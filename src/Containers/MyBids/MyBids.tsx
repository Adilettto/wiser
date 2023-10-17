import Sidebar from "Components/Sidebar/Sidebar";
import React, { useState } from "react";
import styles from "./MyBids.module.scss";
import { Button, Pagination, Tabs } from "antd";

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
          <TabPane  tab={<div className={styles.bids__block__tabs__tab}>Active</div>} key="1" >
            <table className={styles.bids__table}>
              <thead>
                <tr>
                  <th>Created</th>
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
          <TabPane tab={<div className={styles.bids__block__tabs__tab}>Completed</div>} key="2">
            Content 2
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.bids__block__navPage}
            />
          </TabPane>
          <TabPane tab={<div className={styles.bids__block__tabs__tab}>History</div>} key="3">
            Content 3
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.bids__block__navPage}
            />
          </TabPane>
          <TabPane tab={<div className={styles.bids__block__tabs__tab}>Unit</div>} key="4">
            Content 4
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
