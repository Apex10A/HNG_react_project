import React from "react";
import FavoriteMovieComponent from "./Topmovies";

const FeaturedMovies = () => {
    return(
        <div className="featured-movies">
            <div className="head-text">
                <h3>Top Movies</h3>
                <p>See More {">"}</p>
            </div>
            <FavoriteMovieComponent/>
        </div>
    )
}
export default FeaturedMovies