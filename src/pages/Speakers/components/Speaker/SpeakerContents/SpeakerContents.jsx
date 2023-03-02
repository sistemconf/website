import styles from './SpeakerContents.module.scss';

/** @typedef {import("./SpeakerContents").SpeakerContentsProps} SpeakerContentsProps */

/** @param {SpeakerContentsProps} props */
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
