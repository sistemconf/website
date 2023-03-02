import styles from "./SpeakerContents.module.scss";

/**
 * @param {import('./SpeakerContents').SpeakerContentsProps} props
 * @returns {JSX.Element}
 */
export default function SpeakerContents({ talkDescription, bio }) {
  return (
    <section className={styles.container}>
      <div>
        <h4>Description</h4>
        <p>{talkDescription}</p>
      </div>
      <div>
        <h4>Speaker's Bio</h4>
        <p>{bio}</p>
      </div>
    </section>
  );
}
