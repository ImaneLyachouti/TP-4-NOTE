import React, { useState } from "react";
import Pagination from "./pagination";
import Favorites from "./favorites";
import AddFilmForm from "./AddFilmForm";

const Movie = ({ films, onAddFilm }) => {
    const [favorites, setFavorites] = useState([]); 
    const [selectedFilm, setSelectedFilm] = useState(null); 
    const [currentPage, setCurrentPage] = useState(1);

    const filmsPerPage = 5;

    // Pagination
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
    const totalPages = Math.ceil(films.length / filmsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Ajouter aux favoris
    const addToFavorites = (film) => {
        if (!favorites.some((fav) => fav.title === film.title)) {
            setFavorites([...favorites, film]);
        } else {
            alert(`${film.title} est déjà dans vos favoris.`);
        }
    };

    // Retirer des favoris
    const removeFromFavorites = (film) => {
        setFavorites(favorites.filter((fav) => fav.title !== film.title));
    };

    // Afficher les détails du Film
    const selectFilm = (film) => {
        setSelectedFilm(film);
    };

    return (
        <div>
            <h1>Liste des Films</h1>
            <div className="div">
                {currentFilms.map((film, index) => (
                    <section
                        key={index}
                        className="Card"
                        onClick={() => selectFilm(film)}
                    >
                        <b>Title</b>: {film.title} <br />
                        {selectedFilm && selectedFilm.title === film.title && (
                            <div>
                                <p><b>Director:</b> {film.director}</p>
                                <p><b>Release Year:</b> {film.releaseYear}</p>
                                <p><b>Genre:</b> {film.genre}</p>
                                <p><b>Rating:</b> {film.rating}</p>
                            </div>
                        )}
                        <button onClick={(e) => { e.stopPropagation(); addToFavorites(film); }} className="buton">
                            Ajouter aux Favoris
                        </button>
                    </section>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />
            <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
            <AddFilmForm onAddFilm={onAddFilm} />
        </div>
    );
};

export default Movie;
