import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div>
                {/* Basic list */}
                {/* <ul>
                    {

                    this.props.movies.map((movie, i) => {
                        return (
                            <li key={i}>
                                <h2>{movie}</h2>
                            </li>
                             )
                         })
                    }

                </ul>     */}

                {/* // Array of a list */}
                <ul>
                    {

                    this.props.movies.map((movie, i) => {
                        return (
                            <li key={i}>
                                <h2>{movie.title}</h2>
                                <span>{movie.year}</span>
                                <hr/>
                            </li>
                             )
                         })
                    }

                </ul>    

            </div>
        )
    }
}