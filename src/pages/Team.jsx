import Navbar from "../components/static/Navbar";
import useScroll from "../hooks/useScroll"
import "./Team.scss"

import duNetsoc from "../assets/societies/du-netsoc.png"
import muComputerScience from "../assets/societies/mu-compsoc.png"
import dcuRedbrick from "../assets/societies/redbrick.png"
import ucdNetsoc from "../assets/societies/ucd-netsoc.png"
import ugCompSoc from "../assets/societies/ug-compsoc.png"
import uuComputingSoc from "../assets/societies/uu-computing-society.png"

export default function Team() {
    const scrollAmount = useScroll();

    return (
        <div className="team">
            <Navbar hasBg={scrollAmount > 450}/>
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
                                <h4>UG: Computing Society</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}