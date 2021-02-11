import React from 'react';
import Card from './Card';
import Popular from "./Popular"


class PopularBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f")
            .then(response => response.json())
            .then(response => {
                console.log(response)

                this.setState({
                    movies: response.results
                })
            })
    }

    render() {
        return (
            <div>
                {/* {this.state.movies.map((movieBattle1) => {
                    const filmCount = { movieBattle1 }.length;
                    console.log(filmCount); */}
                    return (
                        <p>pop</p>
                    );
                })}

            </div>
        );
    }
}
export default PopularBattle;