import styles from "./SpeakerHeader.module.scss";
import NameAndJobTitle from "./NameAndJobTitle/NameAndJobTitle.jsx";

/** @typedef {import("./SpeakerHeader.js").SpeakerHeaderProps} SpeakerHeaderProps */

/** @param {SpeakerHeaderProps} props */
export default function SpeakerHeader({
  talkTitle,
  name,
  jobTitle,
  image,
  linkedin,
}) {
  return (
    <div className={styles.container}>
      {image && (
        <img className={styles.image} src={image.url} alt={image.alt} />
      )}
      <div className={styles.talkTitleAndName}>
        <h3 className={styles.talkTitle}>{talkTitle}</h3>
        <NameAndJobTitle name={name} jobTitle={jobTitle} linkedin={linkedin} />
      </div>
    </div>
  );
}
