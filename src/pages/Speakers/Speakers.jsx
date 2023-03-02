import Navbar from "../../components/static/Navbar";
import useScroll from "../../hooks/useScroll";

import "./Speakers.scss";

import Footer from "../../components/static/Footer";
import Speaker from "./components/index.js";

/** @typedef {import("../Speakers").SpeakersProps} SpeakersProps */

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
              {" "}
              This year, we have brought together an exciting lineup of speakers
              who will be sharing their knowledge, experience, and insights on a
              variety of topics related to technology.
            </p>
          </div>
        </section>
        <section className="speakers--container">
          {speakers.map((speaker) => (
            <Speaker {...speaker} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
