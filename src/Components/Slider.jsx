import { useEffect, useRef, useState } from "react";
import { getTrendingMovies } from "../API/GlobalApi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;
function Slider(){
    const [moviesList,setMoviesList] = useState([]);
    const elementRef = useRef();
    useEffect(()=>{
        getMovies();
    },[])
    const getMovies = async ()=>{
        const movies = await getTrendingMovies();
        const res = await movies.json();
        // console.log(res.results);
        setMoviesList(res.results);
    }
    function sliderLeft(element){
        element.scrollLeft-=screenWidth;
    }
    function sliderRight(element){
        element.scrollLeft+=screenWidth;
    }
    return(
        <>
        <HiChevronDoubleLeft  className="md:block hidden text-white text-4xl absolute mt-[145px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>
        <div className="flex  overflow-x-auto px-4 py-2 no-scrollbar scroll-smooth" ref={elementRef}>
            {moviesList.map((item,id)=>(
                <img key ={id} src={baseUrl+""+item.backdrop_path} className="min-w-full h-[310px] mt-2 object-cover rounded-md mr-8 hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"></img>
            ))}
        </div>
        <HiChevronDoubleRight className="md:block hidden text-white text-4xl absolute mt-[-195px] right-0 cursor-pointer" onClick={()=>sliderRight(elementRef.current)}/>
        
        </>
    )
}
export default Slider;