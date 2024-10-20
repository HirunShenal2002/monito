'use client';
import Button from "@/components/button";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";
import { Chip, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BsChevronRight, BsPlayCircle } from "react-icons/bs";
import { IoIosPlayCircle } from "react-icons/io";
import Navbar from "@/components/navbar";
import Marquee from "react-fast-marquee";
import { img } from "framer-motion/client";

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

  const blogPosts = [
    {
      img: "/imgs/blogImg1.png",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
      tag: "Pet knowledge",
    }, {
      img: "/imgs/blogImg2.png",
      title: "Dog Diet You Need To Know",
      description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
      tag: "Pet knowledge",
    }, {
      img: "/imgs/blogImg3.png",
      title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
      tag: "Pet knowledge",
    },
  ];

  return (
    <>

      <Navbar />

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

      <div className="px-10 xl:p-0 max-w-[1200px] mx-auto">

        {/* pet section */}
        <div className="my-10">
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
                <ProductCard key={index} product={pet} isPetsCard={true} />
              ))}
            </div>
          </div>
        </div>

        <Banner bannerImage="/imgs/homeBanner1.png" title="One more friend" subtitle="Thousands more fun!" description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!" button1="View Into" button2="Explore Now" colour1="#003459" colour2="#FCEED5" colour3="#002A48" isImageLeft={true} />

        {/* product section */}
        <div className="my-10">
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

        <div className="hidden lg:flex gap-y-10 flex-col my-20">

          <div className="flex justify-between">
            <div className="flex items-baseline gap-x-3">
              <small>Proud to be part of</small>
              <p className="font-bold text-2xl">Pet Sellers</p>
            </div>
            <Button text="View all our sellers" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
          </div>

          {/* Seller Marquee */}
          <Marquee speed={50} autoFill>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee1.png" alt="seller1" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee2.png" alt="seller2" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee3.png" alt="seller3" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee4.png" alt="seller4" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee5.png" alt="seller5" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee6.png" alt="seller6" /></div>
            <div className="mx-10"><Image className="h-12" src="/imgs/marquee7.png" alt="seller7" /></div>
          </Marquee>

          <Banner bannerImage="/imgs/homeBanner2.png" title="Adoption" subtitle="We need help. so do they." description="Adopt a pet and give it a home,it will be love you back unconditionally." button1="View Into" button2="Explore Now" colour1="#FFB775" colour2="#FCEED5" colour3="#FFE7BA" isImageLeft={false} />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col gap-y-3 p-5">
              <Image className="w-full h-[250px] object-cover" width={1000} height={250} src={post.img} alt={post.title} />
              <Chip className="bg-[#00A7E7] text-white">
                {post.tag}
              </Chip>
              <h4 className="text-2xl font-bold">{post.title}</h4>
              <p>{post.description}</p>
            </div>
          ))}
        </div>

      </div >

      <Footer />
    </>
  );
}


function Banner({
  bannerImage,
  title,
  subtitle,
  description,
  button1,
  button2,
  colour1,
  colour2,
  colour3,
  isImageLeft
}: {
  bannerImage: string,
  title: string,
  subtitle: string,
  description: string,
  button1: string,
  button2: string,
  colour1: string,
  colour2: string,
  colour3: string,
  isImageLeft: boolean
}) {
  return (
    <div className={`w-full lg:h-[380px] relative flex justify-between flex-col-reverse rounded-2xl overflow-clip px-2 md:px-20 ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`} style={{ backgroundColor: colour1 }}>

      {isImageLeft ? (
        <>
          <div className={`w-[1200px] lg:w-[782.29px] h-[800px] lg:h-[635px] absolute -top-16 md:top-16 lg:top-0 right-0 -translate-y-2/3 translate-x-40 lg:translate-x-1/4 lg:-translate-y-1/4 rounded-[99px] rotate-[20deg] lg:rotate-[35deg] z-10`} style={{ backgroundColor: colour2 }}></div>
          <div className={`w-[1000px] lg:w-[782.29px] h-[1000px] lg:h-[635px] absolute top-0 left-20 lg:left-0 translate-y-1/2 -translate-x-1/4 lg:-translate-x-1/4 lg:translate-y-1/4 z-0 rounded-[99px] rotate-[20deg] lg:rotate-[30deg]`} style={{ backgroundColor: colour3 }}></div>
        </>) : (
        <>
          <div className={`w-[782.29px] h-[635px] absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-0 rounded-[99px] rotate-[45deg]`} style={{ backgroundColor: colour2 }}></div>
          <div className={`w-[782.29px] h-[635px] absolute top-0 right-0 translate-x-1/3 translate-y-1/3 z-0 rounded-[99px] rotate-[45deg]`} style={{ backgroundColor: colour3 }}></div>
        </>
      )}

      <Image className="w-full h-full object-cover z-10" src={bannerImage} alt={title} />

      <div className={`w-full text-center lg:w-2/3 flex flex-col justify-center gap-y-2 lg:gap-y-5 text-primary z-10 xl:max-w-[400px] pt-5 lg:p-5 mt-5 lg:mt-0 ${isImageLeft ? "lg:text-right" : ""}`}>
        <h3 className="text-3xl md:text-5xl font-bold ">{title}</h3>
        <p className="text-xl lg:text-3xl font-semibold">{subtitle}</p>
        <p className="text-sm lg:text-medium">{description}</p>

        <div className={`w-full flex items-center justify-center gap-x-5 mt-5 lg:mt-0 ${isImageLeft ? "justify-end" : ""}`}>
          <Button text={button1} color="outlined" icon={<BsPlayCircle />} type="iconLeft" />
          <Button text={button2} color="primary1" />
        </div>

      </div>

    </div>
  );
}