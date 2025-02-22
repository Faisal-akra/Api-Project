import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/slices/products";
import Hero from "@/custom-components/Hero";
import FeaturedProduct from "@/custom-components/Feautured";
import Latest from "@/custom-components/Latest";
import Footer from "@/custom-components/Footer";
import Navbar from "@/custom-components/Navbar";
function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return(
    <div>
     
<Navbar/>
      <Hero/>
      <FeaturedProduct/>
      <Latest/>
      <Footer/>
    </div>
  )
}

export default Home;


// import Navbar from "../custom-components/Navbar";
// import Feautured from "..//custom-components/Feautured";



// const Home = () => {
//   return(
//   <div>
//     <Navbar/>
//     <Feautured/>

//   </div>
//   )
// }

// export default Home;