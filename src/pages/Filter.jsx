
import { Checkbox } from "../components/ui/checkbox";
import { setSearchQuery, setCategory } from "../slices/products";
import { useDispatch, useSelector } from "react-redux";


function FilterProduct() {
  const {filterProducts,  isLoading} = useSelector((state) => state.products)
  const dispatch = useDispatch();

 const handleSearch = (event) => {
  console.log("triggerd");
  dispatch(setSearchQuery(event.target.value));
 };


 const handleCategory = (event) => {
  event ? dispatch(setCategory("Electronics")) : dispatch(setCategory(""));
};

  return (
    <div>
     
      <h1 className="text-center font-extrabold mt-3 mb-3">
        Filtered-Products
      </h1>
      <input type="text" className="border border-black" placeholder="Search-Here" 
        onChange={handleSearch}
      />

<Checkbox
id="terms"
onCheckedChange={handleCategory}
/>

      <div className="flex flex-col  p-5 gap-3 ">
        {isLoading ? (
          <div className="text-center w-[100%] justify-center flex-col content-center  ">
            <p>Feautured-Products Loading....... </p>
          </div>
        ) : (
          filterProducts.map((product) => (
            <div className="flex flex-col  " key={product.id}>
          
              <div className="bg-blue-200 p-2 hover:bg-blue-400 group">
                

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


export default FilterProduct;



































































// import { useSelector } from "react-redux";

// function FilterProduct() {

//   const {isLoading, products} = useSelector((state) => state.filter)
  
//   return(
//     <div>
//       <h1>Filter</h1>
//     <input type="search" placeholder="seacrh-product" />
//     {
//       isLoading? (
//         <p>Loading........</p>
//       ) : (
//         products.map((product) => (
//           <div key={product.id}>
//             <img src={product?.images[0]} alt={product.name} />
//             <h2>{product.title}</h2>
//             <h3>{product.price}</h3>

//           </div>
//         ))
//       )
//     }
     
//     </div>
//   )
// }

// export default FilterProduct;