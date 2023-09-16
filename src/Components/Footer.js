import React from "react";
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import instagram from "../assets/instagram.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={twitter}/>
            <img src={youtube}/>
            </div>
            <div className="nav-items">
            <ul>
            <li>Conditions of use</li>
            <li>Privacy Policy</li>
            <li>Press Room</li>
            </ul>
            </div>
            <div className="attribute">
                <p> &copy; 2023 by Greatness. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;