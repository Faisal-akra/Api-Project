import Navbar from "@/custom-components/Navbar";
import img1 from "../assets/feautured-products/perfume.png";
import { CarTaxiFrontIcon, Circle, GitPullRequestCreateArrowIcon, HeartIcon,  Star } from "lucide-react";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <h1>Account / Gaming / Chair</h1>

      <div className="w-[70%] ml-[10%]">
        <div className="flex  p-5 justify-evenly  ">
          <div className="flex flex-col gap-5 ">
            <img src={img1} alt="" className="rounded-2xl w-40" />
            <img src={img1} alt="" className="rounded-2xl w-40" />
            <img src={img1} alt="" className="rounded-2xl w-40" />
          </div>

          <div className="flex   p-6 w-[40%] h-[15%] ">
            <img src={img1} className="w-full rounded-md" />
          </div>

          <div className=" flex flex-col p-8  ">
            <h1 className="text-center font-extrabold mb-1">
              Jan classic perfume imported .
            </h1>
            <div className="flex   justify-center mb-4">
              <Star className="" />
              <Star className="" />
              <Star className="" />
              <Star className="" />
              <Star className="" />
              <p>(150 reviews)</p>
            </div>

            <div className="flex flex-col">
              <h1>$99</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
                Aut, voluptatem.
              </p>
            </div>
            <p>_________________________________________</p>

            <div className="">
              <div className="flex gap-2 mb-3">
                <h1 className="font-semibold">Colors:</h1>
                <Circle className="bg-blue-500 w-5" />
                <Circle className="bg-pink-500 w-5" />
              </div>

              <div className="flex gap-2">
                <h1 className="font-semibold">Size:</h1>
                <p className="rounded-sm border border-black w-6 h-6 border-r-2 text-center justify-center content-center">
                  XS
                </p>
                <p className="rounded-sm border border-black w-6 h-6  text-center justify-center content-center">
                  S
                </p>
                <p className="rounded-sm border border-black w-6 h-6 border-r-2 text-center justify-center content-center bg-red-500">
                  M
                </p>
                <p className="rounded-sm border border-black w-6 h-6 border-r-2 text-center justify-center content-center">
                  L
                </p>
                <p className="rounded-sm border border-black w-6 h-6 border-r-2 text-center justify-center content-center">
                  Xl
                </p>
              </div>

              <div className="flex mt-2 p-2">
                <button className="border border-black w-8">-</button>
                <p className="border border-black w-12 text-center">2</p>
                <button className="border border-black w-8 bg-red-500">
                  +
                </button>

                <div className="flex gap-4">
                  <button className="ml-3 border bg-red-500">Buy Now</button>
                  <HeartIcon />
                </div>
              </div>



              <div className="flex p-1 border border-black gap-2 mt-4">
                <div className="flex mt-3">
                  <CarTaxiFrontIcon />
                </div>

                <div className="">
                  <h1>Free Delivery</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>






            <div className="flex p-1 border border-black gap-2 mt-4">
                <div className="flex mt-3">
                  <GitPullRequestCreateArrowIcon/>
                </div>

                <div className="">
                  <h1>Return Delivery</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
          


            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
