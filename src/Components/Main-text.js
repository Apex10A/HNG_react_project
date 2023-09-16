import React from "react";
import Imdb from "./Imdb";
import TomatoLogo from "./Tomato";
import WatchTrailerButton from "./WatchTrailerButton";

const MainText = () => {
   return(
    <div className="main-text">
        <h1>John Wick 3 : Parabellum</h1>
        <div className="labels">
           <span><Imdb/> &thinsp; 86.0 / 100</span> 
           <span><TomatoLogo/> &thinsp; 97%</span> 
        </div>
        <p>John Wick is on the run after killing a member of the international assassin's guild, 
        and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <WatchTrailerButton/>
    </div>
   )
}
export default MainText;