'use client';
import Button from "@/components/button";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

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

      {/* pet section */}
      <div className="max-w-[1200px] mx-auto my-20">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col text-primary">
              <small>Whats new?</small>
              <p className="font-bold text-lg">Take a look at some of our pets</p>
            </div>
            <Button text="View more" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            {pets.map((pet, index) => (
              <ProductCard key={index} product={pet} />
            ))}
          </div>
        </div>
      </div>

      {/* product section */}
      <div className="max-w-[1200px] mx-auto my-20">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col text-primary">
              <small>Hard to choose right products for your pets?</small>
              <p className="font-bold text-lg">Our Products</p>
            </div>
            <Button text="View more" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
