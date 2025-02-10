import Navbar from "@/custom-components/Navbar";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { myApp } from "@/firebaseconfig";
import { useState } from "react";


function Login() {
const auth = getAuth(myApp)
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleData = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };


  
  const submit = async (e) => { 
    e.preventDefault();
  
    setFormData({
      email: "",
      password: ""
    });
  
    try {
      const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("success", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  

  return(
    <div>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen text-center ">
        <div className="flex flex-wrap flex-col border border-black justify-center text-center max-w-md w-full ">

            <h1 className=" bg-orange-300" >Login Form</h1>

                <input onChange={handleData} value={formData.email} 
                 className="border border-black text-center" type="email" value={formData.email} name="email"  placeholder="Enter your email" />
                <input onChange={handleData}
                 className="border border-black my-1 text-center" type="password" name="password" value={formData.password} placeholder="Enter your Password" />
                <button onClick={submit}
                 className=" ml-auto mr-auto border border-black w-fit bg-orange-300 " type="submit">Submit-Form</button>
                 
                 <button 
                 className=" ml-auto mr-auto border border-black w-fit bg-orange-300 " type="submit">with-Google</button>
                 

            </div>
        </div>
    </div>
  
    )
}



export default Login;



















// import Navbar from "@/custom-components/Navbar";
// import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { myApp } from "@/firebaseconfig";
// import { useFirebaseContext } from "@/context/FirebaseContext";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const context = useFirebaseContext();
//   const auth = getAuth(myApp);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleData = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       navigate('/');
//     } else {
//       console.log("User is not authenticated.");
//     }
//   });

//   return () => unsubscribe();
// }, [auth, navigate]); // Add auth and navigate as dependencies

// const submit = async (e) => {
//   e.preventDefault();
//   const { email, password } = formData;

//   if (!email || !password) {
//     console.log("Please enter both email and password.");
//     return; // Return early if either field is empty
//   }

//   try {
//     await context.login(formData);
//     setFormData({ email: "", password: "" });
//   } catch (error) {
//     console.log("Error logging in:", error.message);
//   }
// };
//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen text-center">
//         <div className="flex flex-wrap flex-col border border-black justify-center text-center max-w-md w-full">
//           <h1 className="bg-orange-300">Login Form</h1>
//           <input
//             onChange={handleData}
//             value={formData.email}
//             className="border border-black text-center"
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//           />
//           <input
//             onChange={handleData}
//             className="border border-black my-1 text-center"
//             type="password"
//             name="password"
//             value={formData.password}
//             placeholder="Enter your Password"
//           />
//          <button onClick={submit} className="ml-auto mr-auto border border-black w-fit bg-orange-300" type="button">
//   Submit-Form
// </button>

//           <button
//             className="ml-auto mr-auto border border-black w-fit bg-orange-300"
//             type="button"
//           >
//             with-Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
















// import React, { useEffect, useState } from "react";
// import {
//   signInWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { app } from "@/firebaseConfig";
// import { useFirebaseContext } from "@/context/firebaseContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const context = useFirebaseContext();
//   const auth = getAuth(app);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   // Handle input value changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigate("/");
//       } else {
//         console.log("kuch bi nahi");
//       }
//     });
//   }, [context.isLogin]);
  
//   const handleLogin = (e) => {
//     e.preventDefault();
//     context.login(formData);
//   };



//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 flex items-center justify-center">
//           <span className="text-sm text-gray-600">or</span>
//         </div>
//         <div className="mt-4 space-y-2">
//           <button
//             type="button"
//             onClick={() => alert("Login with Google")}
//             className="w-full flex items-center justify-center px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
//           >
//             Login with Google
//           </button>
//           <button
//             type="button"
//             onClick={() => alert("Login with Facebook")}
//             className="w-full flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
//           >
//             Login with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;