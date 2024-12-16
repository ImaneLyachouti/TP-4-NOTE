import React from "react";

const MovieList = ({ film }) => {
    return (
        <div >
            <h2>Détails du Film</h2>
            <p><b>Title:</b> {film.title}</p>
            <p><b>Director:</b> {film.director}</p>
            <p><b>Release Year:</b> {film.releaseYear}</p>
            <p><b>Genre:</b> {film.genre}</p>
            <p><b>Rating:</b> {film.rating}</p>
         
        </div>
    );
};

export default MovieList;
