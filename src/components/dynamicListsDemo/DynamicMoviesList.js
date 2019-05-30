import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard'; // <== don't forget to import 
import AddMovie from './AddMovie';
import TextareaAndSelectTagDemo from './TextareaAndSelectTagDemo'
class DynamicMoviesList extends Component{

    constructor(){
       
        super();
        /*
        this.state={

            movies: [
                { title: "The Godfather", director: "Francis Coppola" },
                { title: "Star Wars", director: "Rian Johnson" },
                { title: "The Shawshank Redemption", director: "Frank Darabont" }
              ]
        }
        */


        this.state={

            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
            ]

        }
    }
    deleteMovieHandler=(index)=>{

        const moviesCpy=this.state.movies;

        moviesCpy.splice(index,1);

        this.setState({
           movies: moviesCpy
                });

    }

    clickToAddHP=()=>{
        const HPmovie= { title: "Harry Potter", director: "J.K.Rowling" };
        const moviesCpy=this.state.movies;
        moviesCpy.push(HPmovie);
        this.setState({
            movies: moviesCpy
                 });
    }

    addMovieHandler = (theMovie) => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.push(theMovie);
        this.setState({
          movies: moviesCopy
        })
      }
/*
    deleteMovieHandler = (movieIndex) => {
        const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
      }

*/
    render(){

        console.log(this.state.movies);
        return(

        <div>
            <TextareaAndSelectTagDemo/>
            <AddMovie  addTheMovie={this.addMovieHandler}/> 
            {
                this.state.movies.map((oneMovie, index) => 
                // some code to be rendered will come here
                // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                //<ImprovedCard  clickToDelete={() => this.deleteMovieHandler(index)} key={index} title={oneMovie.title} director={oneMovie.director}/>
                <ImprovedCard  clickToDelete={() => this.deleteMovieHandler(index)} {...oneMovie}/>

                )
            }
           <button onClick={this.clickToAddHP}>Add HarryPotter</button>

        </div>
      

        );


    }

}

export default DynamicMoviesList;
