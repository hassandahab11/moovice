import React from 'react';
import Popular from "./Popular"
import "./../style/style.css";

class Card extends React.Component {


    render() {
        return (
            <>
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.cardMovie.poster_path}`} ></img>
                <p>{this.props.cardMovie.title}</p>
                <p>{this.props.cardMovie.release_date}</p>
                <p>{this.props.cardMovie.overview}</p>
            </>

        );
    }
}
export default Card;