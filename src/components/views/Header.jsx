import React from "react";
import { Link
 } from "react-router-dom";




const Header = () => {




   return (
    <nav className= "w-4/5 flex text-black md:justify-center justify-between items-center py-4 mx-auto">
    <div className="md:flex-[0.5] flex-initial">
        <Link to="/">
             <span className="px-2 py-1 font-bold text-3xl italic">Dapp xx-nft</span>
             <span className="py-1 font-semibold talic"> Auction-Nft</span>
        </Link>
    </div>


    <ul className="md:flex-[0.5] md:flex list-none justify-between items-center flex-initial">
        <Link to="/" className="mx-4">Market</Link>
        <Link to="/collections" className="mx-4">Collection</Link>
        <Link to="/artists" className="mx-4">Artist</Link>
        <Link to="/community" className="mx-4">Community</Link>

    </ul>

       <button  className="shadow-xl shadow-black bg-green-400  hover:bg-green-700 md:text-sm sm:text-base p-2">Connect Wallet</button>
    </nav>

   )





}



export default Header