import React from 'react';

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
            <h1>
                Popular
                {this.state.movies.map((movie)=>{
                    return <h1>{movie.title}</h1>
                })}
            </h1>
        );
    }
}
export default Popular;