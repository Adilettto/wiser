import Sidebar from "Components/Sidebar/Sidebar";
import React, { useState } from "react";
import styles from "./MyLoads.module.scss";
import { Button, Pagination, Tabs } from "antd";
import cn from "classnames";
import { AddLoad } from "Components/AddLoad/AddLoad";

const { TabPane } = Tabs;

export const MyLoads = () => {
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
    <div className={styles.loads}>
      <div className={styles.loads__block}>
        <div className={styles.loads__block__header}>
          <h1>My loads</h1>
          {/* <AddLoad set visible={isModalVisible} onCancel={handleModalVisiblity} /> */}
          <Button
            className={styles.loads__block__header__btn}
            onClick={handleModalVisiblity}
          >
            + Add load
          </Button>
        </div>
        <Tabs
          activeKey={currentTab}
          onChange={handleTabChange}
          className={styles.loads__block__tabs}
        >
          <TabPane
            tab={
              <div
                className={cn(
                  styles.loads__block__tabs__tab,
                  currentTab === "1" && styles.loads__block__tabs__tab_active
                )}
              >
                Active
              </div>
            }
            key="1"
          >
            <table className={styles.loads__table}>
              <thead>
                <tr>
                  <th>CREATED</th>
                  <th>LOAD ID</th>
                  <th>PICK-UP AND DELIVERY</th>
                  <th>BROKER</th>
                  <th>OWNER</th>
                  <th>DISPATCHER</th>
                  <th>CLOSED TIME</th>
                  <th>QUICK PAY </th>
                  <th>STATUS </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.loads__block__navPage}
            />
          </TabPane>
          <TabPane
            tab={
              <div
                className={cn(
                  styles.loads__block__tabs__tab,
                  currentTab === "2" && styles.loads__block__tabs__tab_active
                )}
              >
                Checkout
              </div>
            }
            key="2"
          >
            <table className={styles.loads__table}>
              <thead>
                <tr>
                  <th>CREATED</th>
                  <th>LOAD ID</th>
                  <th>PICK-UP AND DELIVERY</th>
                  <th>BROKER</th>
                  <th>OWNER</th>
                  <th>DISPATCHER</th>
                  <th>CLOSED TIME</th>
                  <th>QUICK PAY </th>
                  <th>STATUS </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.loads__block__navPage}
            />
          </TabPane>
          <TabPane
            tab={
              <div
                className={cn(
                  styles.loads__block__tabs__tab,
                  currentTab === "3" && styles.loads__block__tabs__tab_active
                )}
              >
                Completed
              </div>
            }
            key="3"
          >
            <table className={styles.loads__table}>
              <thead>
                <tr>
                  <th>CREATED</th>
                  <th>LOAD ID</th>
                  <th>PICK-UP AND DELIVERY</th>
                  <th>BROKER</th>
                  <th>OWNER</th>
                  <th>DISPATCHER</th>
                  <th>CLOSED TIME</th>
                  <th>QUICK PAY </th>
                  <th>STATUS </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.loads__block__navPage}
            />
          </TabPane>
          <TabPane
            tab={
              <div
                className={cn(
                  styles.loads__block__tabs__tab,
                  currentTab === "4" && styles.loads__block__tabs__tab_active
                )}
              >
                History
              </div>
            }
            key="4"
          >
            <table className={styles.loads__table}>
              <thead>
                <tr>
                  <th>CREATED</th>
                  <th>LOAD ID</th>
                  <th>PICK-UP AND DELIVERY</th>
                  <th>BROKER</th>
                  <th>OWNER</th>
                  <th>DISPATCHER</th>
                  <th>CLOSED TIME</th>
                  <th>QUICK PAY </th>
                  <th>STATUS </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    08:01 pm <br />
                    09/11/2023
                  </td>
                  <td>
                    649702 <br /> WI28- 000003
                  </td>
                  <td>
                    JOLIET, IL 60436 <br />
                    Swedesboro,NJ08085
                  </td>
                  <td>
                    Millhouse logistics Inc(EPAY)
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Wisper Inc
                    <br />
                    $1050{" "}
                  </td>
                  <td>
                    Johnny W
                    <br />
                  </td>
                  <td>
                    07/07/2023
                    <br />
                    02:55 PM
                  </td>
                  <td>Requested</td>
                  <td>
                    <p className={styles.loads__block__tabs__status}>
                      Canceled
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination
              current={currentPagination}
              onChange={handlePaginationChange}
              total={50}
              className={styles.loads__block__navPage}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
