'use client';
import React, { useEffect, useState } from "react";
import Button from "@/components/button";
import { BreadcrumbItem, Breadcrumbs, Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { CarouselProvider, Dot, DotGroup, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsChat, BsChevronRight, BsFacebook, BsInstagram, BsShare, BsTwitter, BsYoutube } from "react-icons/bs";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/productCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Page = () => {

    interface CustomerReview {
        name: string;
        pet: string;
        image: string;
    }

    const [pets, setPets] = useState([]);
    const [customerReviews, setCustomerReviews] = useState<CustomerReview[]>([]);

    const fetchPets = async () => {
        const res = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
        const data = await res.json();
        setPets(data);
    }

    const fetchCustomerReviews = async () => {
        const res = await fetch("https://monitor-backend-rust.vercel.app/api/customers");
        const data = await res.json();
        setCustomerReviews(data);
    }

    useEffect(() => {
        fetchPets();
        fetchCustomerReviews();
    }, []);

    const carouselImages = [
        "/imgs/singleViewCarousal1.png",
        "/imgs/singleViewCarousal2.png",
        "/imgs/singleViewCarousal3.png",
        "/imgs/singleViewCarousal4.png",
        "/imgs/singleViewCarousal5.png",
        "/imgs/singleViewCarousal6.png",
    ];
    var slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        initialSlide: 0,
        responsive: [,
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <Navbar />

            {/* Header section */}
            <div className="w-full flex flex-col lg:flex-row gap-5 gap-x-10 mt-20 lg:border-gray-100 lg:border py-5 lg:p-5 lg:rounded-2xl lg:max-w-[1200px] mx-auto">
                {/* Left side Image Carousel */}
                <div className="w-full lg:w-1/2">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={80.5}
                        totalSlides={6}
                        visibleSlides={1}
                        infinite={true}
                        isPlaying={true}
                        interval={5000}
                        dragEnabled
                        isIntrinsicHeight
                    >
                        <Slider className="md:rounded-2xl overflow-clip">
                            {carouselImages.map((img, index) => (
                                <Slide index={index} key={index} className="flex justify-center items-center w-full h-full max-h-[523px] md:max-h-[476px]">
                                    <Image src={img} alt="hero" width={1000} height={600} className="object-cover w-full h-full max-h-[523px] md:max-h-[476px]" radius="none" />
                                </Slide>
                            ))}
                        </Slider>

                        <DotGroup className="w-full flex justify-center items-center mt-2">
                            {carouselImages.map((img, index) => (
                                <Dot key={index} className="p-1" slide={index}>
                                    <Image src={img} alt="hero" width={100} height={100} className="aspect-square object-cover w-full h-full" />
                                </Dot>
                            ))}
                        </DotGroup>
                    </CarouselProvider>

                    <Guarantee className="hidden lg:block" />

                    <div className="px-4 xl:p-0 hidden lg:block">
                        <div className="w-full flex text-sm mt-6 text-primary gap-x-5">
                            <p className="flex gap-x-2 font-bold">
                                <BsShare className="w-[18.77px] h-[18.77px]" /> Share:
                            </p>
                            <a href="#" className="text-gray-400" target="_blank">
                                <BsFacebook className="w-[18.77px] h-[18.77px]" />
                            </a>
                            <a href="#" className="text-gray-400" target="_blank">
                                <BsTwitter className="w-[18.77px] h-[18.77px]" />
                            </a>
                            <a href="#" className="text-gray-400" target="_blank">
                                <BsInstagram className="w-[18.77px] h-[18.77px]" />
                            </a>
                            <a href="#" className="text-gray-400" target="_blank">
                                <BsYoutube className="w-[18.77px] h-[18.77px]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side Information */}
                <div className="w-full lg:w-1/2 flex flex-col px-5 xl:p-0 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.05)] rounded-t-2xl lg:rounded-none lg:shadow-none relative">

                    <div className="w-10 h-1.5 rounded-full top-1 mx-auto bg-neutral-400 my-4 lg:hidden"></div>

                    <Breadcrumbs>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Dog</BreadcrumbItem>
                        <BreadcrumbItem>Large Dog</BreadcrumbItem>
                        <BreadcrumbItem>Shiba Inu Sepia</BreadcrumbItem>
                    </Breadcrumbs>

                    <div className="w-full flex flex-col">
                        <small className="text-gray-300 mt-4 hidden lg:block">SKU #1000078</small>
                        <h1 className="text-primary text-2xl font-bold">Shiba Inu Sepia</h1>
                        <p className="mt-3 font-bold">34.000.000 VND</p>
                    </div>

                    <div className="w-full mt-5 lg:mt-10 flex gap-x-3">
                        <Button type="default" text="Contact us" />
                        <Button type="iconRight" text="Chat with Monito" icon={<BsChat />} color="outlined" />
                    </div>

                    <div className="w-full justify-between flex items-center mt-10 lg:hidden">
                        <h2 className="text-lg font-bold">Information</h2>
                        <p className="flex gap-x-2 font-bold justify-center items-center">
                            <BsShare className="w-[18.77px] h-[18.77px]" /> Share
                        </p>
                    </div>

                    <Table hideHeader aria-label="Pet information" shadow="none" className="text-gray-400 -ms-5">
                        <TableHeader>
                            <TableColumn>Item</TableColumn>
                            <TableColumn>Description</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1" className="border-b">
                                <TableCell>SKU</TableCell>
                                <TableCell>: #1000078</TableCell>
                            </TableRow>
                            <TableRow key="2" className="border-b">
                                <TableCell>Gender</TableCell>
                                <TableCell>: Female</TableCell>
                            </TableRow>
                            <TableRow key="3" className="border-b">
                                <TableCell>Age</TableCell>
                                <TableCell>: 2 Months</TableCell>
                            </TableRow>
                            <TableRow key="4" className="border-b">
                                <TableCell>Size</TableCell>
                                <TableCell>: Small</TableCell>
                            </TableRow>
                            <TableRow key="5" className="border-b">
                                <TableCell>Color</TableCell>
                                <TableCell>: Apricot & Tan</TableCell>
                            </TableRow>
                            <TableRow key="6" className="border-b">
                                <TableCell>Vaccinated</TableCell>
                                <TableCell>: Yes</TableCell>
                            </TableRow>
                            <TableRow key="7" className="border-b">
                                <TableCell>Dewormed</TableCell>
                                <TableCell>: Yes</TableCell>
                            </TableRow>
                            <TableRow key="8" className="border-b">
                                <TableCell>Cert</TableCell>
                                <TableCell>: Yes (MKA)</TableCell>
                            </TableRow>
                            <TableRow key="9" className="border-b">
                                <TableCell>Microchip</TableCell>
                                <TableCell>: Yes</TableCell>
                            </TableRow>
                            <TableRow key="10" className="border-b">
                                <TableCell>Location</TableCell>
                                <TableCell>: Vietnam</TableCell>
                            </TableRow>
                            <TableRow key="11" className="border-b">
                                <TableCell>Published Date</TableCell>
                                <TableCell>: 12-Oct-2022</TableCell>
                            </TableRow>
                            <TableRow key="12" className="border-b">
                                <TableCell>Additional Information</TableCell>
                                <TableCell>: Pure breed Shih Tzu.
                                    <br />
                                    Good body structure.
                                    <br />
                                    Comes with MKA cert and Microchip.
                                    <br />
                                    Father from champion lineage.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <Guarantee className="lg:hidden" />
            </div>

            <div className="px-10 xl:p-0">
                <div className="w-full max-w-[1200px] mx-auto">

                    {/* Customer Review section */}
                    <div className="my-20">
                        <h2 className="text-2xl font-bold">Our lovely customer</h2>

                        {/* @ts-ignore */}
                        <SlickSlider
                            {...slickSettings}
                            className="w-full mt-5"
                        >
                            {customerReviews.map((review, index) => (
                                <div className="px-3" key={index}>
                                    <Image src={review.image} alt={review.pet} width={600} height={600} className="object-cover w-full h-full max-h-[476px]" />
                                </div>
                            ))}
                        </SlickSlider>

                    </div>

                    {/* pet section */}
                    <div className="flex flex-col gap-y-10 mt-32">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col text-primary">
                                <small>Whats new?</small>
                                <p className="font-bold text-lg">Take a look at some of our pets</p>
                            </div>
                            <Button text="View more" icon={<BsChevronRight className="w-[15px] h-[15px]" />} type="iconLeft" color="outlined" />
                        </div>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {pets.slice(0, 4).map((pet, index) => (
                                <ProductCard key={index} product={pet} isPetsCard={true} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Page;

function Guarantee({ className }: { className: string }) {
    return (
        <div className={`px-4 xl:p-0 ${className}`}>
            <div className="w-full rounded-2xl bg-secondary bg-opacity-40 p-4 flex flex-col md:flex-row justify-between text-sm lg:mt-6 gap-y-3 md:gap-y-0">
                <div className="flex gap-x-[9px]">
                    <Image src="/icons/dogHeart.svg" alt="dog and cat" width={24} height={24} />
                    <span className="text-primary font-semibold">100% health guarantee for pets</span>
                </div>
                <div className="flex gap-x-[9px]">
                    <Image src="/icons/dogAndCat.svg" alt="dog and cat" width={24} height={24} />
                    <span className="text-primary font-semibold">100% guarantee of pet identification</span>
                </div>
            </div>
        </div>
    )
}