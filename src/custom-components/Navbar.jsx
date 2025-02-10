
import  {SearchCheck, ShoppingCart, HeartIcon} from "lucide-react"
import  {Link} from "react-router-dom"


function Navbar() {
  return(
    <div>
<div className="flex justify-between  w-[100%] p-5  max-h-screen-xl pb-10">
<div className="flex justify-between gap-20">
  <h1>Faisal-Electronics</h1>
  <ul className="flex gap-5" >
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/detail"}>Product-Deatil</Link></li>
    <li><Link to={"/filter"}>Fiter-Products</Link></li>
    <li><Link to={"/login"}>Login</Link></li>
  </ul>
</div>

<div className="flex gap-5">
<SearchCheck/>
<input  type="search" placeholder="Type Search" />

<ShoppingCart/>
<Link to={"/favourite"}> <HeartIcon/>  </Link>
</div>
</div>
    </div>
  )
}

export default Navbar;






// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
// import { useFirebaseContext } from "@/context/FirebaseContext"; // assuming the path

// const Navbar = () => {
//   const auth = getAuth(); // Use your firebase auth instance here
//   const context = useFirebaseContext(); // Access context
  
//   const publicRoutes = [
//     { routename: "Home", url: "/" },
//     { routename: "Favorite", url: "/favorite" },
//     { routename: "Signup", url: "/signup" },
//     { routename: "Login", url: "/login" },
//   ];

//   const protectedRoutes = [
//     { routename: "Home", url: "/" },
//     { routename: "Product", url: "/detail" },
//     { routename: "FilterProduct", url: "/filter" },
//     { routename: "Logout", url: "#" }, // Logout has no URL
//   ];

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("Logout successful");
//         navigate("/login"); // Redirect after logout
//       })
//       .catch((error) => {
//         console.log("Logout error", error);
//       });
//   };
  

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         context.setIsLogin(true); // Set login state to true
//       } else {
//         context.setIsLogin(false); // Set login state to false
//       }
//     });
//     return () => unsubscribe(); // Cleanup when the component unmounts
//   }, [auth, context]);

//   return (
//     <div className="h-[3rem] lg:h-[5rem] flex items-center justify-between px-4 lg:px-10 w-full">
//       <ul className="flex gap-4">
//         {!context.isLogin ?
//            publicRoutes.map((item) => (
//               <li
//                 key={item.url} // Added key to each element
//                 className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]"
//               >
//                 <Link to={item.url}>{item.routename}</Link>
//               </li>
//             ))
//           : protectedRoutes.map((item) => (
//               item.routename === "Logout" ? (
//                 <li
//                   key={item.url} // Added key to each element
//                   onClick={handleLogout}
//                   className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]"
//                 >
//                   <span>{item.routename}</span> {/* Do not link logout */}
//                 </li>
//               ) : (
//                 <li
//                   key={item.url} // Added key to each element
//                   className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]"
//                 >
//                   <Link to={item.url}>{item.routename}</Link>
//                 </li>
//               )
//             ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

















