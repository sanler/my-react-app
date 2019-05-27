import React from 'react';


const Card=(props)=>{

return(

<div>
    <h2>{props.title}</h2>
    <p>Director: {props.director}</p>
</div>


);


}


export default Card;
