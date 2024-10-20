import { Image } from "@nextui-org/react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-secondary bg-opacity-40 rounded-t-[40px] w-full py-10 px-4 mt-20">

      <div className="bg-primary py-8 px-4 justify-center mb-5 mx-auto rounded-2xl lg:max-w-[1180px] gap-y-8 gap-x-3 md:flex md:justify-between md:items-center sm:px-12">
        <div className="lg:flex flex-col lg:w-[389px] lg:h-[72px] justify-start">
          <h2 className="text-2xl font-semibold md:mb-0 mb-6 lg:leading-normal text-white">Register Now So You Don't Miss Our Programs  </h2>
        </div>

        <div className="items-center flex flex-col lg:flex-row bg-white p-2 rounded-2xl gap-2 w-full lg:w-[700px] min-h-[72px] justify-between">
          <input type="text" className="h-full max-w-[500px] w-full border-2 rounded-lg ps-6 py-4" placeholder="Enter your email" />
          <button className="bg-primary text-white w-full lg:w-44 rounded-lg font-bold h-full py-4">Subscribe Now</button>
        </div>
      </div>


      <div className="py-6">
        <div className="lg:max-w-[1180px] w-full mx-auto flex flex-col md:flex-row items-center justify-between text-center">
          <nav className="flex w-full lg:w-fit gap-x-10 justify-between font-Gilroy-Medium text-neutral-100 mb-4 md:mb-0">
            <a href="#">Home</a>
            <a href="#">Category</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="flex space-x-[40px] text-black lg:w-[216px] w-full lg:h-[24px] justify-center lg:justify-end mb-4 md:mb-0">
            <BsFacebook className="h-[24px] w-[24px]" />
            <BsTwitter className="h-[24px] w-[24px]" />
            <BsInstagram className="h-[24px] w-[24px]" />
            <BsYoutube className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-neutral-20 py-4 text-center flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col  me-2 space-x-4 mt-2 order-3 lg:order-1">
          <p className="text-sm font-[500px] font-Gilroy-Medium text-neutral-60">&copy; 2022 Monito. All rights reserved.</p>
        </div>

        <div className="flex flex-col justify-center order-1 mt-2 md:w-[115px] md:h-[40px] lg:mb-0 mb-5 lg:order-2">
          <Image className="h-12 object-contain" src="/imgs/Frame.svg" alt="" />
        </div>

        <div className="flex  mx-3 space-x-4 mt-2 text-sm lg:justify-end justify-center font-[500px] font-Gilroy-Medium text-neutral-60 order-2 lg:order-3">
          <a href="#" className="">Terms of Service</a>
          <a href="#" className="">Privacy Policy</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;