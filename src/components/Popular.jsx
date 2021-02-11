import React from 'react';
import Card from './Card'

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state ={

            movies: [],

        }
    }

    componentDidMount  (){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f")
        .then(response => response.json())
            .then(response => {
                console.log(response)

                this.setState({
                    movies:response.results
                    

                })
            })
    }


    
    render() {
        return(
            <div>
                 <h>
                {this.state.movies.map((movieCard) =>  {
                    return <Card cardMovie={movieCard}></Card>
                })}
            </h>
            <h1>
                Popular
                {this.state.movies.map((movie)=>{
                    return <h1>{movie.title}</h1>
                })}
            </h1>
           
            
            </div>
        );
    }
}
export default Popular;