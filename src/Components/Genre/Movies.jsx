import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../../API/GlobalApi";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";
function Movies(props){
    const [actionMovies,setActionMovies] = useState([]);
    useEffect(()=>{
        getMovies();
    },[])

  
    async function getMovies(){
        const movies = await getMoviesByGenre(props.genreId);
        const res = await movies.json();
        console.log(res.results);
        setActionMovies(res.results);
    }
    return(
        <>

        <div className="flex overflow-auto scroll-smooth no-scrollbar p-2 ">
            {
                actionMovies.map((item,id)=>(
                    <div key={id} className="min-w-[48vw] min-h-[100px] md:min-w-[300px] md:min-h[200px] p-4">
                        <img src={baseImgUrl+item.backdrop_path} className="rounded-lg hover:border-2 border-gray-400 hover:scale-110 transition-all ease-in-out"></img>
                        <p className="text-white p-2">{item.original_title}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Movies;