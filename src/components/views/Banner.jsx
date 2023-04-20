import  React from 'react';

const Banner = () => {



    return(
     
         <div className='flex flex-col md:flex-row w-full justify-between  items-center mx-auto'>


           <div>
            <h1 className="font-semibold  text-5xl py-1">
                Find, Collect
            </h1>

            <h1 className="font-semibold text-4xl mb-5 py-1"> 
                 and Sell  
                   <span className="text-gray-500 px-1">NFTs</span>
            </h1>

            <p className="font-light"> NFTs available to add to your collection </p>
            <p className="font-light mb-11
            "> and sell your created and bought NFT </p>
           </div>
        </div>
    )
}


export default Banner