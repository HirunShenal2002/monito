import React, { useState } from 'react';
import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {BsChevronDown, BsSearch} from "react-icons/bs";
import {Input} from "@nextui-org/react";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        {
            path: '/',
            label: 'home',
        },
        {
            path: '/listing',
            label: 'category',
        },
        {
            path: '/view',
            label: 'about',
        },
        {
            path: '/contact',
            label: 'contact',
        },
    ];


    return (
        <nav className="bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-blue-900">Monitö</h1>
                            <p className="text-sm">Pets for Best</p>
                        </div>


                        {/* Links */}
                        <div className=" hidden md:flex space-x-10 ml-10">
                            {links.map((link, index) => {
                                return (
                                    <Link
                                        href={link.path}
                                        key={index}
                                        className={`${
                                            link.path === pathname && 'font-Gilroy-Medium text-primary'
                                        } capitalize font-Gilroy-Medium text-primary transition-all`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Search and Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="hidden sm:block">
                        <Input
                                classNames={{
                                    base: "px-3 py-2 border rounded-full font-Gilroy-Medium w-64 focus:outline-none focus:ring focus:border-blue-300",
                                    mainWrapper: "h-full",
                                    input: "text-small",
                                    inputWrapper: "border-0",
                                }}
                                placeholder="    Search something here!"
                                size="sm"
                                startContent={<BsSearch className="w-[15px] h-[15px] text-primary font-bold" />}
                                type="search"
                            />
                        </div>
                        <button className="bg-primary text-white font-Gilroy-SemiBold px-4 py-2 rounded-full hover:bg-blue-700">
                            Join the community
                        </button>


                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className='text-primary font-bold'
                                >
                                    <img src='/icons/vietnam.png' className=''/>
                                    VND
                                    <BsChevronDown className="w-[15px] h-[15px] text-primary font-bold" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">ENG</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>





                    </div>

                    {/* Hamburger Menu (for mobile) */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 gap-5 sm:px-3 flex flex-col">
                        {links.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className={`${
                                        link.path === pathname &&
                                        'font-Gilroy-Medium text-primary'
                                    } text-xl capitalize font-Gilroy-Medium text-primary transition-all `}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <input
                            type="text"
                            placeholder="Search something here!"
                            className="mt-3 px-3 py-2 border font-Gilroy-SemiBold rounded-full w-full focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
