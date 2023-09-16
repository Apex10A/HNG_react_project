import React from 'react';
import Play from "../Components/Play"
import Star from './Star';
import Twotickets from './Twotickets';
import List from './Options';
import lastpic from "../Images/bottom-image.jpeg"
import whitelist from "../Images/list.png"

const DetailsPage = ({ movieData }) => {
  // Function to convert date to UTC format
  const convertToUTC = (dateString) => {
    const localDate = new Date(dateString);
    const utcDate = new Date(
      Date.UTC(
        localDate.getUTCFullYear(),
        localDate.getUTCMonth(),
        localDate.getUTCDate(),
        localDate.getUTCHours(),
        localDate.getUTCMinutes(),
        localDate.getUTCSeconds()
      )
    );

    // Format the UTC date string (adjust options as needed)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return utcDate.toLocaleDateString('en-US', options);
  };

  const backdropStyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original${movieData.backdrop_path}')`,
  };

  return (
    <div className="details-page">
      &thinsp;
      <div className="backdrop" style={backdropStyle}>
        <div className='watch-trailer'> 
          {/* Include a Play button here */}
          <Play />
          <span>Watch Trailer</span>
        </div>
      </div>
      <div className="overview-details">
        <div className='first-part'>  
        <div className='title-nav'>
          <p data-testid="movie-title">{movieData.title}</p>
          <ul>
            <li data-testid="movie-release-date">{convertToUTC(movieData.release_date)}</li>
            <li data-testid="movie-runtime">{movieData.runtime} minutes</li>
          </ul>
          <div className='tags'>
            {/* Map over the genres and render them as tags */}
            {movieData.genres.map((genre) => (
              <span className='tag' key={genre.id}>
                {genre.name} 
              </span>
            ))}
          </div>
        </div>
        <p className='overview' data-testid="movie-overview">{movieData.overview}</p>
      </div>
      <div className='second-part'>
        <div className='rate'>
          <Star/> &thinsp;<p>{movieData.vote_average.toFixed(1)} &nbsp;</p> <span>| 350k</span>
        </div>
        &thinsp;
        <div className='two-buttons'>
        <button className='showtimes'><Twotickets/> &thinsp; See Showtimes</button>
        
         <button className='options'> <List/>&thinsp; More watch options</button>
        </div>
        &thinsp;
        <div className='last-picture'>
         <div className='tiny'>
          <img src={whitelist}/> 
          <p> The Best Movies and Shows in September </p>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailsPage;