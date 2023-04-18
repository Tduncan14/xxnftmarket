import { Routes,Route } from "react-router-dom"
import Home from "./components/views/Home"
import Collections from "./components/views/Collection"
import NFT from "./components/views/NFT"
import Header from "./components/views/Header"


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-800 bg-repeat">

 
    <Header />
   <Routes>
      < Route path = "/" element ={<Home />} />
      < Route path = "/collections" element={<Collections />} />
      < Route path = "/nft/:id" element={<NFT />} />
   </Routes>
      
    
    </div>
  )
}

export default App
