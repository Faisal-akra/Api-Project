

import { toggleFavorite } from "@/slices/favorite";
import { HeartIcon, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


function Latest() {
  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  const handleLatest = (e) => {
    dispatch(toggleFavorite(e))
    toast.success('product add successfully')
  }

  return (
    <div>
      <h1 className="text-center font-extrabold mt-3 mb-3">Latest-Products</h1>
      <div className="flex justify-between p-5  ">
        {isLoading ? (
          <p className="text-center font-extrabold">Loading......</p>
        ) : (
          products.slice(6, 10).map((product) => (
            <div className="flex  " key={product.id}>
              <div className="bg-blue-50 p-2 hover:bg-blue-400 group">
                <div>
                  <ShoppingCart onClick={() => handleLatest(product)} className="cursor-pointer" />
                  <HeartIcon onClick={() => handleLatest(product)} className="cursor-pointer" />
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
                  <p>{product.code}</p>
                </div>
              </div>

            
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Latest;





