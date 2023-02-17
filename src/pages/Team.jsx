import Navbar from "../components/static/Navbar";
import useScroll from "../hooks/useScroll"
import "./Team.scss"

import duNetsoc from "../assets/societies/du-netsoc.png"
import muComputerScience from "../assets/societies/mu-compsoc.png"
import dcuRedbrick from "../assets/societies/redbrick.png"
import ucdNetsoc from "../assets/societies/ucd-netsoc.png"
import ugCompSoc from "../assets/societies/ug-compsoc.png"
import uuComputingSoc from "../assets/societies/uu-computing-society.png"
import Footer from "../components/static/Footer";

import rianImg from "../assets/team-members/rian.png"
import yuanImg from "../assets/team-members/yuan.png"
import jamesImg from "../assets/team-members/james.png"
import nicoleImg from "../assets/team-members/nicole.png"

export default function Team() {
    const scrollAmount = useScroll();

    return (
        <div className="team">
            <Navbar hasBg={scrollAmount > 75}/>
            <main>
                <section className="banner">
                    <div className="container">  
                        <h1>Our Team</h1>
                        <p> SISTEM is made up of volunteers from computing societies all across the Isle of Ireland &mdash; both north and south. Contact your society to see how you can get involved!</p>
                    </div>
                </section>
                <section className="participating-societies">
                    <div className="container">
                        <h3>Participating Societies</h3>
                        <div className="societies-list">
                            <div className="society-item">
                                <img src={dcuRedbrick}/>
                                <h4>DCU: Redbrick</h4>
                            </div>
                            <div className="society-item">
                                <img src={duNetsoc}/>
                                <h4>DU: Internet Society</h4>
                            </div>
                            <div className="society-item">
                                <img src={ucdNetsoc}/>
                                <h4>UCD: Netsoc</h4>
                            </div>
                            <div className="society-item">
                                <img src={uuComputingSoc}/>
                                <h4>UU: Computing Society</h4>
                            </div>
                            <div className="society-item">
                                <img src={muComputerScience}/>
                                <h4>MU: Computer Science Society</h4>
                            </div>
                            <div className="society-item">
                                <img src={ugCompSoc}/>
                                <h4>UG: Computer Society</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="team-members">
                <div className="container">
                    <h3>Team Members</h3>
                    <div className="team-list">
                        <div className="team-item">
                            <img src={rianImg} className="sistem-gradient"/>
                            <div className="team-info">
                                <span className="name">Rían Errity</span>
                                <span className="society">DU Netsoc</span>
                                <div className="links">
                                    <a href="mailto:rian@paradaux.io" className="email"> email </a> &middot;
                                    <a href="https://paradaux.io" className="email"> website </a> &middot; 
                                    <a href="https://www.linkedin.com/in/r%C3%ADan-errity/" className="email"> linkedin </a>
                                </div>
                            </div>
                        </div>

                        <div className="team-item">
                            <img src={yuanImg} className="sistem-gradient"/>
                            <div className="team-info">
                                <span className="name">Yuan Zhang</span>
                                <span className="society">UU Computing</span>
                                <a href="https://www.linkedin.com/in/yuan-zhang-965aaa141/" className="email">linkedin</a>
                            </div>
                        </div>

                        <div className="team-item">
                            <img src={jamesImg} className="sistem-gradient"/>
                            <div className="team-info">
                                <span className="name">James Hackett</span>
                                <span className="society">DCU Redbrick</span>
                                <div className="links">
                                    <a href="mailto:james@distrobyte.io" className="email"> email </a> &middot;
                                    <a href="https://james-hackett.ie/" className="email"> website </a>
                                </div>
                            </div>
                        </div>

                        <div className="team-item">
                            <img src={nicoleImg} className="sistem-gradient"/>
                            <div className="team-info">
                                <span className="name">Nicole McCabe</span>
                                <span className="society">UCD Netsoc</span>
                                <a href="https://www.linkedin.com/in/nicolemccabechu" className="email"> linkedin </a>
                            </div>
                        </div>

                        <p className="additional-credit"> Among countless others who make this event possible year after year !</p>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}