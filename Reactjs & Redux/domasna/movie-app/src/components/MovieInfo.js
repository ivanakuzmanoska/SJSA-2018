import React from 'react';
import { Avatar } from './Avatar';

export const MovieInfo = (props) => {
    return (
        <div className="movie-info">
        <Avatar data={props.data} />
        
        <h1>{props.data.name}</h1>
        <h2>directed by {props.data.director}</h2>
        <h2>{props.data.genre} {props.data.rating}</h2>
        </div>
    )
}

export default MovieInfo;