import React from 'react';
const ImprovedCard = (props) => {
  return (
    <div  className="movies-list-item">
        <h2>{props.title}</h2>
        <p>Director: {props.director}</p>
        {
            props.hasOscars ? <p>Tiene Oscar!</p>:<p>No tiene Oscar</p>
        }
        <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
};

export default ImprovedCard;