// import { myApp } from "@/firebaseconfig";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { createContext, useState, useContext } from "react";

// // Create Firebase Context
// export const FirebaseContext = createContext();

// const FirebaseProvider = ({ children }) => {
//   // const auth = getAuth(myApp);
//   const [isLogin, setIsLogin] = useState(false); // Default to false, update on login
//   const [message, setMessage] = useState(""); // Optional message state

//   const login = async ({ email = "test@example.com", password = "password123" }) => {
//     const auth = getAuth(myApp);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Error logging in:", error);
//       throw error;
//     }
//   };
  
  

//   return (
//     <FirebaseContext.Provider value={{ isLogin, setIsLogin, login, message, setMessage }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// // Custom hook to access Firebase context
// export const useFirebaseContext = () => {
//   return useContext(FirebaseContext);
// };

// export default FirebaseProvider;





































// // import { app } from "@/firebaseConfig";
// // import {
// //   createUserWithEmailAndPassword,
// //   getAuth,
// //   signInWithEmailAndPassword,
// // } from "firebase/auth";
// // import { createContext, useContext, useState } from "react";
// // import { toast } from "react-toastify";

// // export const FirebaseContext = createContext();

// // const FirbaseProvider = ({ children }) => {
// //   const auth = getAuth(app);
// //   const [isLogin, setIsLogin] = useState(true);
// //   const login = ({ email, password }) => {
// //     signInWithEmailAndPassword(auth, email, password)
// //       .then((response) => {
// //         console.log("Login successful:", response.user);
// //         toast.success("Successfully logged in"); // Provide meaningful logs
// //       })
// //       .catch((error) => {
// //         console.error("Login error:", error.message); // Log error for debugging
// //         toast.error("Invalid Credential");
// //       });
// //   };
// //   return (
// //     <FirebaseContext.Provider value={{ isLogin, setIsLogin, login, message }}>
// //       {children}
// //     </FirebaseContext.Provider>
// //   );
// // };

// // export const useFirebaseContext = () => {
// //   return useContext(FirebaseContext);
// // };
// // export default FirbaseProvider;

// // export const useAuthContext = () => {
// //   return getAuth(app);
// // };