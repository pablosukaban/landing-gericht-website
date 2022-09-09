import React, { useState } from 'react';
import { navLinks } from '../constants';
import { separator, menu } from '../assets';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header
                className={
                    'w-full hidden lg:flex justify-between items-center text-white  '
                }
            >
                <a href="">
                    <h1
                        className={
                            'font-cormorant font-bold text-[2.75rem] leading-[130%] cursor-pointer uppercase'
                        }
                    >
                        Gerícht
                    </h1>
                </a>
                <nav className="flex justify-center items-center xl:gap-8 gap-4">
                    {navLinks.map((item) => (
                        <div
                            key={item.id}
                            className="font-openSans text-base leading-[175%] cursor-pointer"
                        >
                            <a href={`#${item.name}`}>{item.name}</a>
                        </div>
                    ))}
                </nav>

                <div className="flex justify-center items-center font-semibold xl:gap-[3.125rem] gap-2">
                    <span>Log In / Registation</span>
                    <img src={separator} className="" />
                    <span>Book table</span>
                </div>
            </header>
            <header className="lg:hidden flex justify-between items-center w-full text-white flex-wrap">
                <a href="">
                    <h1
                        className={
                            'font-cormorant font-bold text-[2.75rem] leading-[130%] cursor-pointer uppercase mr-3'
                        }
                    >
                        Gerícht
                    </h1>
                </a>
                <img
                    src={menu}
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                />
                {isOpen ? (
                    <div className="flex flex-col justify-end absolute top-20 right-0 p-5 border rounded">
                        <nav className="flex flex-col justify-center items-center md:gap-3 gap-4">
                            {navLinks.map((item) => (
                                <div
                                    key={item.id}
                                    className="font-openSans text-base leading-[175%] cursor-pointer"
                                >
                                    <a href={`#${item.name}`}>{item.name}</a>
                                </div>
                            ))}
                        </nav>

                        <div className="flex flex-col justify-center items-center font-semibold xl:gap-[3.125rem] gap-2 mt-3">
                            <span>Log In / Registation</span>
                            <span>Book table</span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </header>
        </>
    );
};

export default Header;
