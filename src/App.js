import './App.css';
import Header from "./components/Header";
import BitMeet from "./components/BitMeet";
import Take from "./components/Take";
import With from "./components/With";
import Wallet from "./components/Wallet";
import Swap from "./components/Swap";
import Market from "./components/Market";
import Bridge from "./components/Bridge";
import Assistant from "./components/Assistant";
import Explorer from "./components/Explorer";
import Organ from "./components/Organ";
import Review from "./components/Review";
import Collabor from "./components/Collabor";
import Faq from "./components/Faq";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";
import OverMenu from "./components/OverMenu";
import {useState} from "react";
import Light from "./components/Light";

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const onMenuChange = function () {
        setShowMenu(!showMenu);
    }

    return (
        <div className="App" style={{background: showMenu ? "rgb(210 52 3 / 1)" : 'transparent'}}>
            <Header menuChange={onMenuChange}/>
            <div style={{display: showMenu ? 'block' : 'none'}}>
                <OverMenu/>
            </div>
            <div style={{display: showMenu ? 'none' : 'block'}}>
                <BitMeet/>
                <Take/>
                <With/>
                <Wallet/>
                <Swap/>
                <Market/>
                <Bridge/>
                <Assistant/>
                <Explorer/>
                <Organ/>
                <Review/>
                <Collabor/>
                <Faq/>
                <Social/>
                <Footer/>
                <Bottom/>
            </div>




        </div>
    );
}

export default App;
