import React from "react";
import styles from "./Onboarding.module.scss";
import { InputField } from "Components/UI/InputField/InputField";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";

type Props = {};

export const OnboardingContainer = (props: Props) => {
  return (
    <div className={styles.onboard}>
      <div className={styles.onboard__block}>
        <h2>User Information</h2>
        <div className={styles.onboard__block__inputs}>
          <InputField
            text="First name"
            type="text"
            placeholder="e.g. John"
            className={styles.onboard__block__input}
          />
          <InputField
            text="Surname"
            type="text"
            placeholder="e.g. Johnson"
            className={styles.onboard__block__input}
          />
          <InputField
            text="Email"
            type="email"
            placeholder="e.g. john@gmail.com"
            className={styles.onboard__block__input}
          />
          <InputField
            text="Phone number"
            type="number"
            placeholder="0 (000) 000 0000"
            className={styles.onboard__block__input}
          />
          {/* <InputField
            text="Time zone"
            type="select"
            placeholder=""
            className={styles.onboard__block__input}
          /> */}
        </div>
        <div className={styles.onboard__block__btn}>
          <MainBtn text="Let's get started" />
        </div>
      </div>
    </div>
  );
};
