import Blogs from "./components/Blogs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const {fetchData} = useContext(AppContext);
  useEffect(()=>{
    fetchData();
  },[])
 

  return (
    <>
      <div>
        <Header />
        <div className="w-[45%] mx-auto mt-4    flex flex-col justify-between  items-start">
          <Blogs />
          <hr className="font-bold text-black" /> 
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
