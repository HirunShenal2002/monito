"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { BsFilter, BsFunnel, BsXLg } from "react-icons/bs";
import { Autocomplete, AutocompleteItem, Button, Checkbox, Divider, Input, Pagination } from "@nextui-org/react";
import ProductCard from "@/components/productCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Page = () => {

    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const res = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
        const data = await res.json();
        setPets(data);
    }
    useEffect(() => {
        fetchPets();
    }, []);

    const [sideDrawer, setSideDrawer] = useState(false);

    const sortBy = [
        { label: "Newest", value: "newest" },
        { label: "Oldest", value: "oldest" },
        { label: "Most Popular", value: "most-popular" },
        { label: "Least Popular", value: "least-popular" }
    ];

    return (
        <>
            <Navbar/>

            {/* Slider for small screens */}
            <Dialog open={sideDrawer} onClose={setSideDrawer} className="relative z-10 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute right-0 top-0 -mr-8 flex pl-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-mr-10 sm:pl-4">
                                        <button
                                            type="button"
                                            onClick={() => setSideDrawer(false)}
                                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            <BsXLg aria-hidden="true" className="h-6 w-6" />
                                        </button>
                                    </div>
                                </TransitionChild>
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Panel title</DialogTitle>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <SlideFilterSection />
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>


            <div className="w-full max-w-[1200px] px-10 lg:px-0 mx-auto">
                {/* Header Banner */}
                <div className="w-full h-[378px]">

                </div>

                <div className="w-full flex">

                    {/* Sidebar */}
                    <div className="w-[380px] h-max sticky top-10 hidden lg:block">
                        <SlideFilterSection />
                    </div>


                    {/* Main Content */}
                    <div className="w-full">

                        {/* Main Content Header & Sort By */}
                        <div className="w-full grid grid-cols-2 gap-y-5 lg:flex justify-between items-baseline">
                            <div className="w-full flex gap-x-3 items-baseline">
                                <h1 className="font-semibold text-primary text-2xl">Small Dog</h1>
                                <small className="text-gray-400">52 Puppies</small>
                            </div>

                            <div className="flex justify-end">
                            <Button onClick={() => setSideDrawer(true)} className="lg:hidden w-fit" endContent={<BsFunnel/>} radius="full" variant="light">Filter</Button>
                            </div>

                            <Autocomplete
                                defaultItems={sortBy}
                                className="max-w-[200px] border-1 rounded-full p-1"
                                placeholder="Sort by"
                                radius="full"
                                variant="bordered"
                            >
                                {sortBy.map((item, index) => (
                                    <AutocompleteItem key={index} value={item.value}>
                                        {item.label}
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                        </div>

                        {/* Main Content Body */}
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                            {pets.map((pet, index) => (
                                <ProductCard key={index} product={pet} isPetsCard={true} />
                            ))}
                            {pets.map((pet, index) => (
                                <ProductCard key={index} product={pet} isPetsCard={true} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="w-full flex justify-center mt-10 text-primary">
                            <Pagination showControls total={10} initialPage={1} className='text-primary'/>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

// Slide Filter Section
function SlideFilterSection() {

    const gender = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
    ];

    const color = [
        { label: "Red", value: { colour1: "#FF564F", colour2: "#FF564F" } },
        { label: "Apricot", value: { colour1: "#FFB672", colour2: "#FFB672" } },
        { label: "Black", value: { colour1: "#242B33", colour2: "#242B33" } },
        { label: "Black & White", value: { colour1: "#242B33", colour2: "#D2D2D2" } },
        { label: "Silver", value: { colour1: "#CECECE", colour2: "#CECECE" } },
        { label: "Tan", value: { colour1: "#FFF7CE", colour2: "#FFF7CE" } },
    ];

    const breed = [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
    ];

    return (
        <>
            <h2 className="font-semibold text-primary text-2xl">Filter</h2>

            {/* Filter By gender */}
            <div className="w-full my-5">
                <h3 className="font-semibold text-primary text-lg">Gender</h3>
                <div className="w-full flex flex-col gap-y-2 mt-3">
                    {gender.map((item, index) => (
                        <Checkbox key={index} alt={item.label} value={item.value}>
                            {item.label}
                        </Checkbox>
                    ))}
                </div>
            </div>

            <Divider className="max-w-[calc(100%-20px)] bg-gray-100" />

            {/* Filter By Color */}
            <div className="w-full my-5">
                <h3 className="font-semibold text-primary text-lg">Color</h3>
                <div className="w-full flex flex-col gap-y-2 mt-3">
                    {color.map((item, index) => (
                        <Checkbox key={index} alt={item.label} value={item.value.colour1 + item.value.colour2}>
                            <div className="w-full flex items-center gap-x-2">
                                <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(90deg, ${item.value.colour1} 50%, ${item.value.colour2} 50%)` }}></div>
                                <span>{item.label}</span>
                            </div>
                        </Checkbox>
                    ))}
                </div>
            </div>

            <Divider className="max-w-[calc(100%-20px)] bg-gray-100" />

            {/* Filter By Price */}
            <div className="w-full my-5">
                <h3 className="font-semibold text-primary text-lg">Price</h3>
                <div className="w-full flex gap-x-2 mt-3 pe-2">
                    <Input classNames={{ inputWrapper: 'bg-transparent' }} type="number" placeholder="Min" size="sm" />
                    <Input classNames={{ inputWrapper: 'bg-transparent' }} type="number" placeholder="Max" size="sm" />
                </div>
            </div>

            <Divider className="max-w-[calc(100%-20px)] bg-gray-100" />

            {/* Filter By Breed */}
            <div className="w-full my-5">
                <h3 className="font-semibold text-primary text-lg">Breed</h3>
                <div className="w-full flex flex-col gap-y-2 mt-3">
                    {breed.map((item, index) => (
                        <Checkbox key={index} alt={item.label} value={item.value}>
                            {item.label}
                        </Checkbox>
                    ))}
                </div>
            </div>

            <Divider className="max-w-[calc(100%-20px)] bg-gray-100" />

        </>
    )
}

export default Page;