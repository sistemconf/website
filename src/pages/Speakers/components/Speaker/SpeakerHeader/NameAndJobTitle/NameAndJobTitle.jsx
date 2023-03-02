import SistemIcon from "../../../../../../components/SistemIcon.jsx";
import styles from "./NameAndJobTitle.module.scss";

/**
 * @param {import('./NameAndJobTitle.js').NameAndJobTitleProps} props 
 * @returns {JSX.Element}
 */
export default function NameAndJobTitle({ name, jobTitle, linkedin }) {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndJobTitle}>
        <span>{name}</span>
        <span className={styles.jobTitle}>{jobTitle}</span>
      </div>
      {linkedin && <SistemIcon type="linkedin" href={linkedin} />}
    </div>
  );
}
