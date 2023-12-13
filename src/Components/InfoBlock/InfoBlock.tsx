import styles from "./InfoBlock.module.scss";

interface InfoBlockProps {
  leaded: string;
  pieces: string;
  dims: string;
  weight?: string;
  truckSize: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  leaded,
  pieces,
  dims,
  weight,
  truckSize,
}) => {
  return (
    <div className={styles.info__columns}>
      <ul className={styles.info__column}>
        <li className={styles.info__column__li}>Leaded</li>
        <li className={styles.info__column__li}>Pieces</li>
        <li className={styles.info__column__li}>Dims</li>
        <li className={styles.info__column__li}>weight</li>
        <li className={styles.info__column__li}>Truck size</li>
        <li className={styles.info__column__li}>Notes</li>
      </ul>
      <ul className={styles.info__column}>
        <li>{leaded}</li>
        <li>{pieces}</li>
        <li>{dims}</li>
        <li>{weight}</li>
        <li>{truckSize}</li>
      </ul>
    </div>
  );
};
