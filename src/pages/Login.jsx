
import { toast } from "react-toastify";

import Navbar from "@/custom-components/Navbar";


// import { myApp } from "@/firebaseconfig";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { myApp } from "@/firebaseconfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";




function Login() {

  const auth = getAuth(myApp);

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
      console.log('data get to firebase', response);
      toast.success('login successfully')
    } catch (error) {
      console.log('erre', error );
      toast.error('invalid credential ')
    }
   
  };
  

  return(
    <div>
      <Navbar/>
      <div className="w-full h-[100vh] flex justify-center bg-black items-center">
    <div className="flex flex-col justify-center items-center  border border-r-1 border-solid w-[30%] bg-black h-[50%] gap-5 text-white  ">

      <div className="text-white ">
      <h1>Login Form</h1>
      </div>

      <div className="flex flex-col text-center justify-center w-[60%] gap-1">
        <input name="email" value={formData.email} onChange={handleData} className="text-center  text-black mb-5 border border-black rounded-md" type="email" placeholder="enter your email"/>
        <input name="password" value={formData.password} onChange={handleData} className="text-center border text-black border-black rounded-md" type="password" placeholder="enter your password" />
        <div className="">
        <button onClick={submit} className="border border-white rounded-md mt-5 w-full ">Submit</button>
        </div>
      </div>

      </div>
    </div>
    </div>
  
    )
}



export default Login;



























// import  { useEffect, useState } from "react";
// import {
//   // signInWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { myApp } from "@/firebaseconfig"; 
// import { useFirebaseContext } from "@/context/firebaseContext";
// // import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const context = useFirebaseContext();
//   const auth = getAuth(myApp);
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

//   // Handle form submission
//   // const auth = getAuth(app);
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   const { email, password } = formData;
//   //   const data = await signInWithEmailAndPassword(auth, email, password);
//   //   if (data.user) {
//   //     console.log("User created:", data.user);
//   //   } else {
//   //     console.error("Error creating user:", data.error);
//   //   }

//   //   // Add your login logic here (e.g., API call)
//   //   alert(`Logged in with email: ${formData.email}`);
//   // };

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
















