import React from 'react';
 import Banner from './Banner';

const Hero = () => {


    return (
        <div className="w-4/5 flex text-black md:justify-center justify-between items-center py-4 mx-auto">
           
           <Banner />
            <h2>Bidder</h2>

            

        </div>
    )
}


//  const  Banner = () => {

//      return(<div  className="flex flex-col md:flex-row w-full justify-between items-center mx-auto"> Banner </div>)
//  }


export default Hero