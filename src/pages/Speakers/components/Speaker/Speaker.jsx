import SpeakerHeader from "./SpeakerHeader/SpeakerHeader.jsx";
import SpeakerContents from "./SpeakerContents/SpeakerContents.jsx";

import styles from './Speaker.module.scss';

/** @typedef {import("../../Speakers").Speaker} SpeakerProps */

/** @param {SpeakerProps} props */
export default function Speaker({
  name,
  jobTitle,
  talkTitle,
  talkDescription,
  bio,
  linkedin,
  image,
}) {
  return (
    <div className={styles.container}>
      <SpeakerHeader
        talkTitle={talkTitle}
        name={name}
        jobTitle={jobTitle}
        linkedin={linkedin}
        image={image}
      />
      <SpeakerContents talkDescription={talkDescription} bio={bio} />
    </div>
  );
}
