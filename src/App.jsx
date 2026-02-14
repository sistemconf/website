import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Team from './pages/Team';
import CodeOfConduct from './pages/CodeOfConduct';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
    return (<Router>
        <div className="app">
            <Navigation/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/speakers" element={<Speakers/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/coc" element={<CodeOfConduct/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    </Router>);
}

export default App;
