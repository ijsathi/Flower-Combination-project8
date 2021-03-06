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
                
            <h1><span className="span">Wðððð ðð</span><span className="span-flower"> ðð¦ð£ ð¸ ðð ðððððð¥ðð ð ð ð ððð ð¨ðð£ð¤</span>!!!</h1>
            <h5>âIf you look the right way, you can see that the whole world is a garden.â<br /> â Frances Hodgson Burnett</h5>
            <h3>Total Budget: <span className="fw-bold"> 100K</span></h3>
            </div>
            <hr />
        </div>
    );
};

export default Header;