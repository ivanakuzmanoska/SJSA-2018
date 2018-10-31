import React from 'react';
import avatar from '../assets/foto.jpg';
import  { Comment } from './Comment' ;
import { MovieInfo } from './MovieInfo';

export class App extends React.Component {
    render() {

        let movie = {
            name: "Pulp Fiction",
            director: 'Quentin Tarantino',
            genre: 'action',
            rating: '*****',
            image_url: avatar
        }
        let stars = {
            actor1: "Jon Travolta",
            actor2: "Uma Thurman",
            actor3: "Samuel L.Jackson",
        }
        return (
           <div>
                  <Comment
                  movie={movie}
                  stars={stars}
                  />
              
           </div>
        )
    }
}

export default App;