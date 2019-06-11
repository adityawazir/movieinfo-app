console.log("loaded");

const movieForm = document.querySelector('form');
const movieSearch = document.querySelector('input');

const movieTitle = document.querySelector('#mov-title');
const movieDate = document.querySelector('#mov-date');
const movieGenre = document.querySelector('#mov-genre');
const moviePlot = document.querySelector('#mov-plot');
const movieImdb = document.querySelector('#mov-imdb');
const movieAward = document.querySelector('#mov-award');

movieForm.addEventListener("submit",(e)=>{
    e.preventDefault();
        
    movieTitle.textContent="Loading..";
    movieDate.textContent='';
    movieAward.textContent='';
    movieGenre.textContent='';
    moviePlot.textContent='';
    movieImdb.textContent='';

        let movie=movieSearch.value;

        const url = "/movieinfo?moviename="+movie;

        fetch(url).then((res)=>{
            res.json().then((data)=>{
                if(data.error)
                {
                    movieTitle.textContent=data.error;
                }else{
                    movieTitle.textContent="Title: "+data.title;
                    movieDate.textContent="Release Date: "+data.release;
                    movieGenre.textContent="Genre: "+data.genre;
                    moviePlot.textContent="Plot: "+data.plot;
                    movieImdb.textContent="IMDB Rating: "+data.imdbr+'/10';
                    movieAward.textContent="Awards: "+data.award;
                }
            })
        })
    
});