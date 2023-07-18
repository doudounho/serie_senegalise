import React from 'react';

const MovieCard= ({Title,Rating,Description,PostUrl}) => {

        return (
            <div>
                <img  src={PostUrl} alt={Title}></img>
                
    
                <h2>{Title} </h2>
                <span>{Rating} </span>
                <span>{Description} </span>
                <span>{PostUrl} </span>
                 
            </div>
        )
    }
  



export default MovieCard; 