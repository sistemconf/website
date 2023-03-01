import Navbar from '../components/static/Navbar';
import useScroll from '../hooks/useScroll';

/** @typedef {import("./Speakers").SpeakersProps} SpeakersProps */

import './Speakers.scss';

import Footer from '../components/static/Footer';

import SistemIcon from '../components/SistemIcon';

/** @param {SpeakersProps} */
export default function Speakers({ speakers }) {
  const scrollAmount = useScroll();

  return (
    <div className="speakers">
      <Navbar hasBg={scrollAmount > 75} />
      <main className="main--content">
        <section className="banner">
          <div className="container">
            <h1>Speakers</h1>
            <p>
              {' '}
              This year, we have brought together an exciting lineup of speakers
              who will be sharing their knowledge, experience, and insights on a
              variety of topics related to technology.
            </p>
          </div>
        </section>
        <section className="speakers--container">
          {speakers.map((speaker) => (
            <div className="speakers--speaker">
              <div className="speakers--header">
              <img
                  className="speakers--profile-img"
                  src={speaker.image.url}
                  alt={speaker.image.alt}
                  width="120px"
                  height="120px"
                />
                <div className="speakers--title-area">
                  <div className="speakers--title-and-name">
                    <h3 className="speakers--title">{speaker.talkTitle}</h3>
                    <span>{speaker.name}</span>
                  </div>
                  <span className="speakers--job-title">
                    {speaker.jobTitle}
                  </span>
                </div>
              </div>
              <section className="speakers--content">
                <div className="speakers--">
                  <h4>Talk Description</h4>
                  <div>{speaker.talkDescription}</div>
                </div>
                <div>
                  <h4>Speaker's Bio</h4>
                  <div>{speaker.bio}</div>
                </div>
              </section>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
