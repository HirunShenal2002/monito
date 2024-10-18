'use client';
import Button from "@/components/button";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { IoIosPlayCircle } from "react-icons/io";

export default function Home() {

  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchPets = async () => {
    const res = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
    const data = await res.json();
    setPets(data);
  }
  const fetchProducts = async () => {
    const res = await fetch("https://monitor-backend-rust.vercel.app/api/products");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    fetchPets();
    fetchProducts();
  }, []);

  return (
    <>
      {/* hero section */}
      <section className="bg-secondary bg-opacity-50 lg:max-h-[695px] lg:h-screen lg:flex items-center justify-center overflow-clip">
        <div className=" p-10 sm:p-20">
          <p className="leading-[60px] capitalize text-primary font-Gilroy-Bold text-[60px]">One more friend
            <br />
            <span className="capitalize text-primary font-Gilroy-Bold text-[46px]">Thousend more fun!</span>
          </p>
          <p className="max-w-[480px] mt-[24px] font-Gilroy-Medium">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex item-center mt-[24px] gap-[20px]">
            <Button color="outlined" icon={<IoIosPlayCircle />} text="Get Started" type="iconLeft" />
            <Button color="primary1" icon={<IoIosPlayCircle />} text="Get Started" type="iconLeft" />
          </div>
        </div>
        {/* image */}
        <div className="relative h-80">
          <img className="absolute z-10 bottom-0" src="/imgs/womanHoldsADog.png" alt="" />
          <img className="absolute -bottom-44" src="/imgs/shapes/headershape2.svg" alt="" />
        </div>
      </section>

      <div className="px-10 xl:p-0">

        {/* pet section */}
        <div className="max-w-[1200px] mx-auto my-10">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-between items-end">
              <div className="flex flex-col text-primary">
                <small>Whats new?</small>
                <p className="font-bold text-lg">Take a look at some of our pets</p>
              </div>
              <Button text="View more" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pets.map((pet, index) => (
                <ProductCard key={index} product={pet} />
              ))}
            </div>
          </div>
        </div>

        {/* product section */}
        <div className="max-w-[1200px] mx-auto my-10">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-between items-end">
              <div className="flex flex-col text-primary">
                <small>Hard to choose right products for your pets?</small>
                <p className="font-bold text-lg">Our Products</p>
              </div>
              <Button text="View more" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
