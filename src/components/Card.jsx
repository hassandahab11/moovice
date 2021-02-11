import React from 'react';
import Popular from "./Popular"

class Card extends React.Component {
    
    
    render() {
        return(
            <div>
               <img src={this.props.cardMovie.poster_path}></img>
               <p>{this.props.cardMovie.title}</p>
               <p>{this.props.cardMovie.release_date}</p>
               <p>{this.props.cardMovie.overview}</p>
                
            </div>
        );
    }
}
export default Card;