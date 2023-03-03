import SpeakerHeader from "./SpeakerHeader/SpeakerHeader.jsx";
import SpeakerContents from "./SpeakerContents/SpeakerContents.jsx";

import styles from "./Speaker.module.scss";

/**
 * @param {import('./Speaker.js').SpeakerProps} props
 * @returns {JSX.Element}
 */
export default function Speaker({
  name,
  jobTitle,
  talkTitle,
  talkDescription,
  bio,
  linkedin,
  twitter,
  image,
}) {
  return (
    <div className={styles.container}>
      <SpeakerHeader
        talkTitle={talkTitle}
        name={name}
        jobTitle={jobTitle}
        linkedin={linkedin}
        twitter={twitter}
        image={image}
      />
      <SpeakerContents talkDescription={talkDescription} bio={bio} />
    </div>
  );
}
