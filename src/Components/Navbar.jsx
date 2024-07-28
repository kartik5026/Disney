
import logo from "../assets/disney.png";
import user from "../assets/user.jpg";
import { HiHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
function Navbar() {
    const [val, setVal] = useState(false);
    
    
    function toggle() {
        setVal(!val);
    }
    
    return (
        <>
            <nav className="flex justify-between p-2 items-center text-center">
                <div className="w-20 h-20 md:w-32">
                    <img src={logo}></img>
                </div>
                <div className="text-white md:space-x-10 hidden md:block">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Search</a>
                    <a href="#" className="hover:underline">WatchList</a>
                    <a href="#" className="hover:underline">Originals</a>
                    <a href="#" className="hover:underline">Movies</a>
                    <a href="#" className="hover:underline">Series</a>
                    
                </div>

                <div className="flex gap-5">

                    <a href="#" className="hover:bg-slate-500 h-9"><HiHome className=" block md:hidden text-white text-xl" /></a>
                    <a href="#" className="hover:bg-slate-500 h-9"><HiOutlineSearch className="block md:hidden text-white text-xl" /></a>
                    <a href="#" className="hover:bg-slate-500 h-9" onClick={toggle}><HiMenu className="block md:hidden text-white text-xl" /></a>

                    {
                        val ? <div className="absolute mt-8 ml-10  p-3 bg-slate-950 w-40 block md:hidden">
                            <a href="#" className="hover:underline block md:hidden text-white text-sm py-3">WatchList</a>
                            <a href="#" className="hover:underline block md:hidden text-white text-sm py-3">Movies</a>
                            <a href="#" className="hover:underline block md:hidden text-white text-sm py-3">Series</a>
                        </div> : null
                    }


                </div>
                <div className="w-10 h-20 py-3 md:w-14">
                    <img className="rounded-full " src={user}></img>
                </div>
            </nav>
        </>
    )
}
export default Navbar;