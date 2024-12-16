import React, { useState } from "react";

const AddFilmForm = ({ onAddFilm }) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

      
        if (!title || !director || !releaseYear || !genre || !rating) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        if (rating < 0 || rating > 10) {
            alert("La note doit être comprise entre 0 et 10 !");
            return;
        }

        const newFilm = {
            title,
            director,
            releaseYear,
            genre,
            rating,
        };

        onAddFilm(newFilm);

        setTitle("");
        setDirector("");
        setReleaseYear("");
        setGenre("");
        setRating("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Director</label>
            <input value={director} onChange={(e) => setDirector(e.target.value)} />

            <label>Release Year</label>
            <input value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />

            <label>Genre</label>
            <select name="genre" onChange={(e)=>setGenre(e.target.value)}>
             <option value="Fantasy">Fantasy</option>
             <option value="Drama">Drama</option>
             <option value="Science Fiction">Science Fiction</option>
             <option value="Comedy-Drama">Comedy-Drama</option>
             <option value="Historical Drama">Historical Drama</option>
             <option value="Crime">Crime</option>
             <option value="Action">Action</option>
           </select>

            <label>Rating</label>
            <input value={rating} onChange={(e) => setRating(e.target.value)} />

            <button type="submit">Ajouter Film</button>
        </form>
    );
};

export default AddFilmForm;
