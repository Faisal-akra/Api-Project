
import { toggleFavorite } from "@/slices/favorite";
import { HeartIcon, ShoppingCart } from "lucide-react";

import {  useDispatch, useSelector } from "react-redux";

function FeaturedProduct() {
  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const  handleFav = (date) => {
    dispatch(toggleFavorite(date))
  }

  return (
    <div>
      <h1 className="text-center font-extrabold mt-3 mb-3">
        Feautured-Products
      </h1>

      <div className="flex justify-between p-5  ">
        {isLoading ? (
          <div className="text-center w-[100%] justify-center flex-col content-center  ">
            <p>Feautured-Products Loading....... </p>
          </div>
        ) : (
          products.slice(0, 4).map((product) => (
            <div className="flex  " key={product.id}>
              <div></div>
              <div className="bg-blue-200 p-2 hover:bg-blue-400 group">
                <div className="flex gap-2">
                  <ShoppingCart />
                  <HeartIcon  onClick={() => handleFav(product)} className="bg-red-500"/>
                </div>

                <img
                  src={product?.images[0]}
                  alt={product.name}
                  style={{
                    width: "250px",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                />

                <div className=" text-center group-hover:font-semibold group-hover:bg-blue-900 ">
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
               
                </div>
              </div>

              <div></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedProduct;

{
  /* 
 const featuredProduct = [
  {
    id: 1,
    image: img1,
    title: "Cantilever Chair",
    code: "Y523201",
    price: "$42.00",
  },
  {
    id: 2,
    image: img1,
    title: "Office Chair",
    code: "W321456",
    price: "$35.00",
  },
  {
    id: 3,
    image: img1,
    title: "Office Table",
    code: "X123456",
    price: "$50.00",
  },
  {
    id: 4,
    image: img1,
    title: "Bookshelf",
    code: "Z789123",
    price: "$25.00",
  },
];

  return (
    <div>
       <h1 className=" text-xl font-extrabold mx-auto m-3 w-full text-center border border-black inline-block ">Feautured-Products</h1>

      <div className="flex justify-between  w-[100%] p-5 ">
        <div className="flex gap-5 p-5 w-[100%] justify-between ">
          {featuredProduct.map((product) => (
            <div key={product.id} className="bg-blue-100 p-5 rounded-md  hover:bg-blue-200 group cursor-pointer">
              <div className="flex   ">
                <HeartIcon />
               <ShoppingCart/>
              </div>

              <img
                src={product.image}
                style={{ width: "200px", height: "200px" }}
              />
              <div className="flex text-center justify-center mt-2 flex-col  w-[100%] group-hover:bg-blue-600 group-hover:rounded-xl group-hover:text-white ">
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <h5>{product.code}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct; */
}























// import { fetchProducts } from "@/slices/products";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// function FeaturedProduct() {

//   const  {isLoading, products} = useSelector((state) => state.products)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts())
//   }, [])
 
//   return(
//     <div>

     
//       {
//         isLoading ? (
//           <p>Loading.......</p>
//         ) : (
//           products.slice(0, 4).map((product) => (
//             <div className="flex w-[50%] gap-4 " key={product.id}>
//               <img className="w-60" src={product?.images[0]} alt={product.name} />
//               <h1>{product.title}</h1>
//               <h2>${product.price}</h2>
//             </div>
//           ))
//         )
//       }
//     </div>
//   )
// }


// export default FeaturedProduct;




