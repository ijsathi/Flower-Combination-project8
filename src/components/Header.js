import React from 'react';
import './Header.css';
import headImg1 from '../images/header-img-2.png';
import headImg from '../images/header-img.png';


const Header = () => {
    return (
        <div className="header-img">
            <img className="img-icon" src={headImg1} alt="" /><br />
            <img src={headImg} alt="" />
            <div className="header-title">
                
            <h1><span className="span">W𝕒𝕝𝕔𝕠𝕞𝕖</span><span className="span-flower"> 𝕆𝕦𝕣 𝔸 𝕔𝕠𝕞𝕓𝕚𝕟𝕒𝕥𝕚𝕠𝕟 𝕠𝕗 𝕗𝕝𝕠𝕨𝕖𝕣𝕤</span>!!!</h1>
            <h5>“If you look the right way, you can see that the whole world is a garden.”<br /> – Frances Hodgson Burnett</h5>
            <h3>Total Budget: <span className="fw-bold"> 100K</span></h3>
            </div>
            <hr />
        </div>
    );
};

export default Header;