import Navbar from "../custom-components/Navbar";
import img1 from "../assets/feautured-products/perfume.png"

import { HeartIcon, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/slices/favorite";



function Favourite() {
  const items = useSelector((state) => state.favoriteslice);
  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };
  return (
    <>
      <Navbar />

      <div className="p-3 border ">
        <div className=" p-2 flex gap-10  flex-col ">
          {items?.products?.map((product) => (
            <div
              key={product.id}
              className="flex  w-full gap-5 border border-black p-2"
            >
              <div className=" w-fit  ">
                <img src={img1} alt={product.name} className="w-36" />
              </div>

              <div className="flex justify-center  text-center content-center mt-auto mb-auto flex-col gap-2 ">
                <h1>{product.title}</h1>
                <h2 className="line-through">$30</h2>
                <h2>$50</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className=" m-2 flex justify-around">
                  <HeartIcon onClick={() => handleFavorite(product)} />

                  <ShoppingCart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourite;








