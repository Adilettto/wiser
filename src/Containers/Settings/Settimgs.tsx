import { PlusOutlined } from "@ant-design/icons";
import Button from "Components/UI/Button/Button";
import Tabs from "Components/UI/Tabs/Tabs";
import { TabsProps } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Company from "./Company/Company";
import Profile from "./Profile/Profile";
import Teams from "./Teams/Teams";
import User from "./Users/User";
import Newuser from "Components/UI/Newuser/Newuser";
import styles from "./Settings.module.scss";

const tabs: TabsProps["items"] = [
  {
    label: "Profile",
    key: "profile",
    children: (
      <div>
        <Profile />
      </div>
    ),
  },
  {
    label: "Company",
    key: "company",
    children: (
      <div>
        <Company />
      </div>
    ),
  },
  {
    label: "Teams",
    key: "teams",
    children: (
      <div>
        <Teams />
      </div>
    ),
  },
  {
    label: "Users",
    key: "users",
    children: (
      <div>
        <User />
      </div>
    ),
  },
  {
    label: "Accounting",
    key: "accounting",
    children: <div>tab3</div>,
  },
  {
    label: "Blacklist",
    key: "blacklist",
    children: <div>tab3</div>,
  },
  {
    label: "Incentives",
    key: "incentives",
    children: <div>tab3</div>,
  },
];
type SettimgsProps = {
  setUpdate: (val: boolean) => void;
  update: boolean;
};
const Settimgs: React.FC<SettimgsProps> = ({ setUpdate, update }) => {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  const navigate = useNavigate();

  const handleChange = (tab: string) => {
    setCurrentTab(tab);
    setUpdate(!update);
    if (tab !== "users") {
      navigate("/settings");
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.content__settings}>
        <h2>Settings</h2>
        <Button className={styles.content__settings_btn}>
          <PlusOutlined />
          Add
        </Button>
      </div>
      <div className={styles.content__tabs}>
        <Tabs items={tabs} onChange={handleChange} />
        {currentTab === "users" && (
          <Button
            className={styles.content__tabs__btn}
            onClick={() => {
              setOpen(true);
            }}
          >
            <PlusOutlined />
            Add new user
          </Button>
        )}
        {open && <Newuser setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Settimgs;
