import React from 'react';


const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Vos Favoris</h2>
      {favorites.length > 0 ? (
        <div className="div">
          {favorites.map((fav, index) => (
            <div key={index} className="Card">
              <h3 className="card-title">{fav.title}</h3>
              <p><strong>Réalisateur :</strong> {fav.director}</p>
              <p><strong>Genre :</strong> {fav.genre}</p>
              <button
                className="buton"
                onClick={() => removeFromFavorites(fav)}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun film en favoris.</p>
      )}
    </div>
  );
};

export default Favorites;
