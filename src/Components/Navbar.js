import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "../assets/Search.svg"
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo-name">
         <Logo/>
        </div>
        <div className="search-form">
            <form>
                <label>
                    <input type="text" placeholder="What do you want to watch?"/>
                </label>
            </form>
            <img src={Search}/>
            &thinsp;

        </div>
        <div className="sign-in">
            <p>Sign in</p>
            <Menu/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;