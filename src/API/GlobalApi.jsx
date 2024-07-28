
// const api_key = "f3e5d890ad81503eab39c483756eaf0c"
const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";//for trending movies

const baseUrlGenre = "https://api.themoviedb.org/3/discover/movie?api_key=";

 export const getTrendingMovies = async ()=>{
    const movies = await fetch(baseUrl+"/trending/movie/week?api_key="+api_key);
    return movies;
} 

export const getMoviesByGenre = async(id)=>{
    console.log(id);
    const movies = await fetch(baseUrlGenre+""+api_key+"&with_genres="+id);
    return movies;
}
