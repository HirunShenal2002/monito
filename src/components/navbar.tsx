import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input } from "@nextui-org/react";
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
                <div className="grid grid-cols-3 lg:flex justify-between items-center h-16 gap-x-2">

                    {/* Hamburger Menu (for mobile) */}
                    <div className="flex items-center lg:hidden">
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
                    <div className="flex text-center justify-center">
                        <div className=" inline-block rounded-lg p-3">
                            <h1 className="text-2xl font-bold text-blue-900">Monitö</h1>
                            <p className="text-sm">Pets for Best</p>
                        </div>
                    </div>

                    {/* Search Icon (for mobile) */}
                    <div className="flex items-center justify-end w-full lg:hidden">
                        <BsSearch className="text-gray-800 w-6 h-6" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${link.path === pathname ? 'capitalize text-lg font-Gilroy-Bold text-gray-800 hover:text-gray-600' : ''} capitalize text-lg font-Gilroy-Bold text-gray-800 hover:text-gray-600`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className='flex gap-x-4'>
                        {/* Search Bar */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <Input
                                startContent={<BsSearch className="text-gray-800 w-6 h-6" />}
                                placeholder="Search something here!"
                                className="max-w-[280px]"
                                radius='full'
                            />
                        </div>

                        {/* Join Button and Currency Dropdown */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <Button
                                className="bg-blue-900 text-white rounded-full px-6 py-2 font-Gilroy-Bold"
                            >
                                Join the community
                            </Button>
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
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden">
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
