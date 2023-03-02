import SistemIcon from "../../../../../../components/SistemIcon.jsx";
import styles from "./NameAndJobTitle.module.scss";

/**
 * @param {import('./NameAndJobTitle.js').NameAndJobTitleProps} props
 * @returns {JSX.Element}
 */
export default function NameAndJobTitle({ name, jobTitle, linkedin, twitter }) {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndJobTitle}>
        <span className={styles.name}>{name}</span>
        <span className={styles.jobTitle}>{jobTitle}</span>
      </div>
      <div className={styles.social}>
        {linkedin && <SistemIcon type="linkedin" href={linkedin} />}
        {twitter && <SistemIcon type="twitter" href={twitter} />}
      </div>
    </div>
  );
}
