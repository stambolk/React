import React from 'react';
import {Movie} from './Movie'

export class App extends React.Component{
  
  render(){
    var movieList = [
      {
        name: "Star Wars: Episode V - The Empire Strikes Back",
        date: "1980",
        genre: "Action, Adventure, Fantasy",
        plot: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        imdbLink: "https://www.imdb.com/title/tt0080684/?ref_=fn_al_tt_3",
        imgUrl: "http://photos.imageevent.com/afap/wallpapers/movies/theempirestrikesback//empire-strikes-back-poster.jpg"
      },
      {
        name: "Terminator 2: Judgment Day ",
        date: "1991",
        genre: "Action, Sci-Fi ",
        plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
        imdbLink: "https://www.imdb.com/title/tt0103064/?ref_=fn_al_tt_1",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg"
      },
      {
        name: "Taxi Driver",
        date: "1976",
        genre: "Crime, Drama ",
        plot: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
        imdbLink: "https://www.imdb.com/title/tt0075314/?ref_=fn_al_tt_1",
        imgUrl: "https://cms.entertainment.ie/wp-content/uploads/2016/04/taxi-driver.jpg"
      },
      {
        name: "Apocalypse Now",
        date: "1979",
        genre: "Drama, Mystery, War",
        plot: "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
        imdbLink: "https://www.imdb.com/title/tt0078788/",
        imgUrl: "https://cms.entertainment.ie/wp-content/uploads/2016/04/MV5BZTNkZmU0ZWQtZjQzMy00YTNmLWFmN2MtZGNkMmU1OThmMGYwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_-e1549203798347.jpg"
      },
      {
        name: "Alien",
        date: "1979",
        genre: "Horror, Sci-Fi ",
        plot: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
        imdbLink: "https://www.imdb.com/title/tt0078748/?ref_=fn_al_tt_1",
        imgUrl: "https://cms.entertainment.ie/wp-content/uploads/2016/04/10418.jpg"
      },
      {
        name: "The Rocketeer",
        date: "1991",
        genre: "Action, Adventure, Family ",
        plot: "A young pilot stumbles onto a prototype jetpack that allows him to become a high-flying masked hero.",
        imdbLink: "https://www.imdb.com/title/tt0102803/?ref_=fn_al_tt_1",
        imgUrl: "https://cms.entertainment.ie/wp-content/uploads/2016/04/the-rocketeer-md-web-e1549205396733.jpg"
      }
      ]
    return(
      <div>
        <Movie
        movieList = {movieList}
        />
      </div>
    )
  }
}
