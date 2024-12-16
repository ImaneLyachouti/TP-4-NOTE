import React, { useState } from "react";
import Movie from "./films";
import Tri from "./SortButtons";

const Films =[
    {
    "title": "Inception",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "genre": "Science Fiction",
    "rating": 8.8
    },
    {
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "releaseYear": 1972,
    "genre": "Crime",
    "rating": 9.2
    },
    {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "releaseYear": 2008,
    "genre": "Action",
    "rating": 9.0
    },
    {
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "releaseYear": 1994,
    "genre": "Crime",
    "rating": 8.9
    },
    {
    "title": "Schindler's List",
    "director": "Steven Spielberg",
    "releaseYear": 1993,
    "genre": "Historical Drama",
    "rating": 9.0
    },
    {
    "title": "The Shawshank Redemption","director": "Frank Darabont",
"releaseYear": 1994,
"genre": "Drama",
"rating": 9.3
},
{
"title": "Forrest Gump",
"director": "Robert Zemeckis",
"releaseYear": 1994,
"genre": "Comedy-Drama",
"rating": 8.8
},
{
"title": "The Matrix",
"director": "Lana Wachowski, Lilly Wachowski",
"releaseYear": 1999,
"genre": "Science Fiction",
"rating": 8.7
},
{
"title": "Fight Club",
"director": "David Fincher",
"releaseYear": 1999,
"genre": "Drama",
"rating": 8.8
},
{
"title": "The Lord of the Rings: The Return of the King",
"director": "Peter Jackson",
"releaseYear": 2003,
"genre": "Fantasy",
"rating": 9.0
}
]
const RechercheParTitre = () => {
    const [movies, setMovies] = useState(Films);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

  
    const addFilm = (newFilm) => {
        setMovies([...movies, newFilm]);
        alert(`${newFilm.title} a été ajouté avec succès.`);
    };

    const filteredMovies = movies.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
    );

  
    const sortByYear = () => {
        const sortedMovies = [...movies].sort((a, b) => a.releaseYear - b.releaseYear);
        setMovies(sortedMovies);
    };

 
    const sortByRating = () => {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    };

    return (
        <div>
            <div className="container">
                <div className="searchBar">
                    <label>Chercher par titre :</label>
                    <input
                        type="text"
                        placeholder="Rechercher un film..."
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div>
                    <Tri onSortByYear={sortByYear} onSortByRating={sortByRating} />
                </div>
            </div>
            <Movie films={filteredMovies} onAddFilm={addFilm} />
        </div>
    );
};

export default RechercheParTitre;
