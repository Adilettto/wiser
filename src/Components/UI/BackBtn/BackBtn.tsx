import React from 'react'
import styles from "./BackBtn.module.scss";
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

interface BackBtnProps {
    className: string;
}

export const BackBtn:React.FC<BackBtnProps> = ({className}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }
  return (
    <div className={`${styles.backBtn} ${className || " "}`} onClick={handleNavigate}>
        <LeftOutlined/>
        <p className={styles.backBtn__text}>Back</p>
    </div>
  )
}

