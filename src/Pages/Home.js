import React from "react";
import Main from "../Components/Main";
import "../Styles/index.css"
import FeaturedMovies from "../Components/FeaturedMovies";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div className="">
    <Main/>
    <FeaturedMovies/>
    <Footer/>
    </div>
  );
}

export default Home;
