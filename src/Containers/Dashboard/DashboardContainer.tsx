import React from "react";
import styles from "./DashboardContainer.module.scss";
import dashChart from "../../Assets/dashboardChart.png";

export const DashboardContainer = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <section className={styles.section1}>
        <div className={styles.dateFrom}>
          <label htmlFor="">From</label>
          <input type="date" />
        </div>
        <div className={styles.dateTo}>
          <label htmlFor="">To</label>
          <input type="date" />
        </div>
        <div className={styles.team}>
          <label htmlFor="">Team</label>
          <select name="" id="">
            <option value="">Real Madrid</option>
            <option value="">Barcelona</option>
            <option value="">PSG</option>
            <option value="">Bayern</option>
          </select>
        </div>
        <div className={styles.groups}>
          <label htmlFor="">Groups</label>
          <select name="" id="">
            <option value="">Real Madrid</option>
            <option value="">Barcelona</option>
            <option value="">PSG</option>
            <option value="">Bayern</option>
          </select>
        </div>
        <button>Confirm</button>
      </section>

      <section className={styles.section2}>
        <div className={styles.box}>
          <div className={styles.row}>
            <p>Gross:</p>
            <p>$</p>
          </div>
          <div className={styles.row}>
            <p>Revenue:</p>
            <p>$0.00</p>
          </div>
          <div className={styles.row}>
            <p>Margin:</p>
            <p>0.00%</p>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <p>Gross:</p>
            <p>$</p>
          </div>
          <div className={styles.row}>
            <p>Revenue:</p>
            <p>$0.00</p>
          </div>
          <div className={styles.row}>
            <p>Margin:</p>
            <p>0.00%</p>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <p>Gross:</p>
            <p>$</p>
          </div>
          <div className={styles.row}>
            <p>Revenue:</p>
            <p>$0.00</p>
          </div>
          <div className={styles.row}>
            <p>Margin:</p>
            <p>0.00%</p>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <p>Gross:</p>
            <p>$</p>
          </div>
          <div className={styles.row}>
            <p>Revenue:</p>
            <p>$0.00</p>
          </div>
          <div className={styles.row}>
            <p>Margin:</p>
            <p>0.00%</p>
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <h2>Revenue by Dispatcher</h2>
        <table>
          <thead>
            <tr>
              <th>DISPATCHER</th>
              <th>BIOS MADE BY DISPATCHER</th>
              <th>LOADS RECEIVED</th>
              <th>REVENUE</th>
              <th>MARGIN (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>Cristiano Ronaldo</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section3}>
        <h2>Brokers Check</h2>
        <table>
          <thead>
            <tr>
              <th>BROKER NAME(502)</th>
              <th>LOAD RECEIVED</th>
              <th>LOADS COMPLETED</th>
              <th>DAYS FROM LAST LOAD</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(E) EXPRESS TRANSPORT AMERICA LOGISTICS</td>
              <td>0</td>
              <td>0</td>
              <td>0 (09/09/2923 21:22:18</td>
              <td>:</td>
            </tr>

            <tr>
              <td>(E) EXPRESS TRANSPORT AMERICA LOGISTICS</td>
              <td>0</td>
              <td>0</td>
              <td>0 (09/09/2923 21:22:18</td>
              <td>:</td>
            </tr>
            <tr>
              <td>(E) EXPRESS TRANSPORT AMERICA LOGISTICS</td>
              <td>0</td>
              <td>0</td>
              <td>0 (09/09/2923 21:22:18</td>
              <td>:</td>
            </tr>
            <tr>
              <td>(E) EXPRESS TRANSPORT AMERICA LOGISTICS</td>
              <td>0</td>
              <td>0</td>
              <td>0 (09/09/2923 21:22:18</td>
              <td>:</td>
            </tr>
            <tr>
              <td>(E) EXPRESS TRANSPORT AMERICA LOGISTICS</td>
              <td>0</td>
              <td>0</td>
              <td>0 (09/09/2923 21:22:18</td>
              <td>:</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section4}>
        <h2>Bids By Hour</h2>
        <img src={dashChart} alt="" />
      </section>
    </div>
  );
};
