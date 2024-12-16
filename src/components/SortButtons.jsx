import React from "react";
const Tri=({onSortByYear,onSortByRating})=>{
return(
<div className="button-container" >
<input onClick={onSortByYear} type="button" value="Trier par année" className="yp"></input>
<input onClick={onSortByRating} type="button" value="Trier par note" className="yp"></input>

  </div>
)
}
export default Tri;