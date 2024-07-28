import moviesGenreList from "../../API/Genre.json";
import Movies from "./Movies";
function GenreList(){
    return(
        <>
        {
            moviesGenreList.genres.map((item,id)=> id<=4 &&(
                <div key={id-1}>
                <h1 key={id} className="text-white ml-8 mt-4  text-xl md:text-3xl">{item.name}</h1>
                <Movies genreId = {item.id}/>
                </div>
            ))
        }
        </>
    )
}
export default GenreList;