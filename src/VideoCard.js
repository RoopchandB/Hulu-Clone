import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="image"
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} `}
        <div className="videoCard__date">
          {movie.release_date || movie.first_air_date}
        </div>
        <div className="videoCard__likes">
          <ThumbUpIcon />
          {movie.vote_count}
        </div>
      </p>
    </div>
  );
});

export default VideoCard;
