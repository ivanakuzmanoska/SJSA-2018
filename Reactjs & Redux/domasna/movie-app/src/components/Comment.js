import React from 'react';
import { Avatar } from './Avatar';
import { MovieInfo } from './MovieInfo';

export class Comment extends React.Component {
    render(){
        return(
            <div id="movie-info">
            <MovieInfo  data={this.props.movie}/>

            <div className="stars">
            <p>
                {this.props.stars.actor1}
            </p>
            <p>
                {this.props.stars.actor2}
            </p>
            <p>
                {this.props.stars.actor3}
            </p>
            </div>
        </div>
        )
    }
}

export default Comment;