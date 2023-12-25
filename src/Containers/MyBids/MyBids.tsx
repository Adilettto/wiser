import { NewLoad } from "Components/AddLoadBids/NewLoad";
import BidsList from "Components/MyBids/BidsList/BidsList";
import { Button, Tabs } from "antd";
import cn from "classnames";
import { useState } from "react";
import Paginations from "Components/UI/Pagination/Pagination";
import styles from "./MyBids.module.scss";
import HistoryBids from "Components/MyBids/HistoryBids/HistoryBids";
const { TabPane } = Tabs;

export const MyBids = () => {
  const [currentTab, setCurrentTab] = useState<string>("1");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisiblity = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
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
            <Paginations link="mybids" />
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
            <HistoryBids/>
            <Paginations link="mybids" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
