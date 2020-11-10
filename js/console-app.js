let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

let firstSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
let firstRatedFilm = prompt('На сколько оцените его?', '');
let secondSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
let secondRatedFilm  = prompt('На сколько оцените его?', '');

personalMovieDB.movies[0] = firstSeenFilm;
personalMovieDB.movies[1] = firstRatedFilm;

console.log(personalMovieDB)