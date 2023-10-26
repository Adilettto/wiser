import React, { useState } from "react";
import styles from "./MyBids.module.scss";
import { Button, Pagination, Tabs } from "antd";
import { NewLoad } from "Components/AddLoadBids/NewLoad";
import cn from "classnames";
import BidsList from "Components/MyBids/BidsList/BidsList";

const { TabPane } = Tabs;

export const MyBids = () => {
  const [currentTab, setCurrentTab] = useState<string>("1");
  const [currentPagination, setCurrentPagination] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisiblity = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPagination(page);
  };

  return (
    <div className={styles.bids}>
      <div className={styles.bids__block}>
        <div className={styles.bids__block__header}>
          <h1>My Bids</h1>
          <NewLoad visible={isModalVisible} onCancel={handleModalVisiblity} />
          <Button
            className={styles.bids__block__header__btn}
            onClick={handleModalVisiblity}
          >
            + Add load
          </Button>
        </div>
        <Tabs
          activeKey={currentTab}
          onChange={handleTabChange}
          className={styles.bids__block__tabs}
        >
          <TabPane
            tab={
              <div
                className={cn(
                  styles.bids__block__tabs__tab,
                  currentTab === "1" && styles.bids__block__tabs__tab_active
                )}
              >
                Pending
              </div>
            }
            key="1"
          >
            <BidsList />
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.bids__block__navPage}
            />
          </TabPane>
          <TabPane
            tab={
              <div
                className={cn(
                  styles.bids__block__tabs__tab,
                  currentTab === "2" && styles.bids__block__tabs__tab_active
                )}
              >
                History
              </div>
            }
            key="2"
          >
            <BidsList />
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
