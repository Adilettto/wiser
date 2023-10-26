import React from "react";
import { DeleteOutlined, FormOutlined, PlusOutlined } from "@ant-design/icons";
import { ReactComponent as Email } from "Assets/emailsetting.svg";
import { ReactComponent as User } from "Assets/user.svg";
import Button from "Components/UI/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import Input from "antd/es/input/Input";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__profilepicture}>
        <div>
          <h3>Avatar</h3>
          <p>Edit your profile picture</p>
        </div>
        <div className={styles.container__profilepicture_userimg}>
          <div className={styles.container__profilepicture_userimg_bgtop}>
            <FormOutlined />
          </div>
          <User />
          <div className={styles.container__profilepicture_userimg_bgbottom}>
            <DeleteOutlined
              className={
                styles.container__profilepicture_userimg_bgbottom_icondel
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.container__bgpersonal}>
        <div className={styles.container__bgpersonal__flex}>
          <div className={styles.container__bgpersonal__flex_firstblock}>
            <div>
              <h3>Personal Information</h3>
              <p>Change your identity informations</p>
              <Button
                className={
                  styles.container__bgpersonal__flex_firstblock_btnfirst
                }
              >
                Change account password
              </Button>
              <Button
                className={
                  styles.container__bgpersonal__flex_firstblock_btnsecond
                }
              >
                Save
              </Button>
            </div>
            <div
              className={styles.container__bgpersonal__flex_firstblock_emailbar}
            >
              <Link
                to=""
                className={
                  styles.container__bgpersonal__flex_firstblock_emailbar_link
                }
              >
                <Email />
                Sing out (Gmail)
              </Link>
            </div>
          </div>

          <div>
            <form action="">
              <label htmlFor="">Name</label>
              <br />
              <Input type="text" />
              <br />
              <label htmlFor="">Last name</label>
              <br />
              <Input />
              <br />
              <label htmlFor="">Real name</label>
              <br />
              <Input />
              <br />
              <label htmlFor="">Email</label>
              <br />
              <Input type="email" />
              <br />
              <label htmlFor=""> Phone number</label>
              <br />
              <Input type="number" />
              <br />
              <label htmlFor="">Extension</label>
              <br />
              <Input type="number" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
