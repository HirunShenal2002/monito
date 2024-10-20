import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
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
        <nav className="bg-[#FAEACB] relative w-full">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:justify-start">
                    
                    {/* Hamburger Menu (for mobile) */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Logo - Centered for mobile */}
                    <div className="flex-grow text-center">
                        <div className=" inline-block rounded-lg p-3">
                            <h1 className="text-2xl font-bold text-blue-900">Monitö</h1>
                            <p className="text-sm">Pets for Best</p>
                        </div>
                    </div>

                    {/* Search Icon (for mobile) */}
                    <div className="flex items-center md:hidden">
                        <BsSearch className="text-gray-800 w-6 h-6" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${link.path === pathname ? 'font-Gilroy-Medium text-primary' : ''} capitalize text-lg font-Gilroy-Medium text-gray-800 hover:text-gray-600`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search something here!"
                                className="rounded-full px-4 py-2 border border-gray-300"
                            />
                            <BsSearch className="absolute top-2 right-3 text-gray-800 w-5 h-5" />
                        </div>
                    </div>

                    {/* Join Button and Currency Dropdown */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Button
                            className="bg-blue-900 text-white rounded-full px-6 py-2 font-Gilroy-Bold"
                        >
                            Join the community
                        </Button>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button light className="flex items-center gap-1">
                                    VND <BsChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="usd">USD</DropdownItem>
                                <DropdownItem key="eur">EUR</DropdownItem>
                                <DropdownItem key="vnd">VND</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 gap-5 sm:px-3 flex flex-col">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${link.path === pathname ? 'font-Gilroy-Medium text-primary' : ''} text-xl capitalize font-Gilroy-Medium text-primary transition-all`}
                            >
                                {link.label}
                            </Link>
                        ))}
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
