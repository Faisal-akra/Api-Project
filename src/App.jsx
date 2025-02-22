import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Favourite from "./pages/Favourit";
import ProductDetail from "./pages/Product-Deatil";
import FilterProduct from "./pages/Filter";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {

  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/detail" element={<ProductDetail/>}/>
        <Route path="/filter" element={<FilterProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

    </>
  );
}

export default App;


// import { Route, Routes } from "react-router-dom";
// import Fav from "./pages/Favourit";
// import Home from "./pages/Home";
// import { useEffect } from "react";
// import { fetchProducts } from "@/slices/products";
// import { useDispatch } from "react-redux";
// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   return (
//    <div>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//       <Route path="/fav" element={<Fav/>}/>
//     </Routes>
//    </div>
   
//   );
// };

// export default App;

// import { useDispatch } from "react-redux";

// // import FeaturedProduct from "./custom-components/Feautured";
// // import LatestProduct from "./custom-components/Latest";
// import Navabar from "./customComponents/Navabar";
// import { useEffect } from "react";
// import { fetchProducts } from "./slices/ProductSlice";
// // import axios from "axios";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Favorite from "./pages/Favorite";
// import Cart from "./pages/Cart";
// import { FilterProduct } from "./customComponents/FilterProduct";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ProductForm from "./pages/Product-Deatil";
// import { myApp } from "./firebaseconfig";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { toast } from "react-toastify";
// // import { setProduct } from "./slices/ProductSlice";

// function App() {
//   const dispatch = useDispatch();
//   const auth = getAuth(myApp);
//   // Alternative for createASyncThunk
//   // const fetchProducts = async () => {
//   //   const response = await axios.get(
//   //     "https://api.escuelajs.co/api/v1/products"
//   //   );
//   //   console.log(response.data);

//   //   dispatch(setProduct(response.data));
//   // };
//   // useEffect(() => {
//   //   fetchProducts();
//   // }, []);
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);
//   const handleResetPassword = async () => {
//     const response = await sendPasswordResetEmail(auth, "zjan45097@gmail.com");
//     sendPasswordResetEmail(auth, "zjan45097@gmail.com")
//       .then(() => {
//         toast.success("Email sent successfully");
//         // Password reset email sent!
//         // ..
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
//   };
//   return (
//     <>
//       <Navabar />
//       <button onClick={handleResetPassword} className="">
//         Reset Password
//       </button>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/favorite" element={<Favorite />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product" element={<FilterProduct />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/productForm" element={<ProductForm />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
