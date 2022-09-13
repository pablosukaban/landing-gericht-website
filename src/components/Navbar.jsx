import React, { useState } from 'react';

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <nav className={'text-white w-full lg:px-[7.5rem] px-5'}>
            <div
                className={
                    '2xl:flex hidden justify-between items-center py-8 relative'
                }
            >
                <div>
                    <h1
                        className={
                            'font-cormorant font-bold uppercase text-[2.75rem] leading-[3.5625rem]'
                        }
                    >
                        Gerícht
                    </h1>
                </div>
                <ul
                    className={
                        'flex justify-center items-center font-openSans font-normal tracking-wider gap-8 capitalize'
                    }
                >
                    <li>
                        <a href={`#{home}`}>Home</a>
                    </li>
                    <li>
                        <a href={`#{pages}`}>Pages</a>
                    </li>
                    <li>
                        <a href={`#{contact}`}>Contact us</a>
                    </li>
                    <li>
                        <a href={`#{blog}`}>Blog</a>
                    </li>
                    <li>
                        <a href={`#{landing}`}>Landing</a>
                    </li>
                </ul>
                <div
                    className={
                        'flex justify-center items-center gap-[50px] font-openSans font-semibold font-base capitalize tracking-wider'
                    }
                >
                    <a target={'_blank'} href={'#'}>
                        Log in / Registration
                    </a>
                    <div className={'w-[1px] h-[30px] bg-gray-600'} />
                    <a target={'_blank'} href={'#'}>
                        Book Table
                    </a>
                </div>
            </div>
            <div
                className={
                    '2xl:hidden flex md:flex-row flex-col justify-between items-center gap-5 py-8'
                }
            >
                <div>
                    <h1
                        className={
                            'font-cormorant font-bold uppercase text-[2.75rem] leading-[3.5625rem]'
                        }
                    >
                        Gerícht
                    </h1>
                </div>
                <div
                    className={
                        'flex justify-center items-center md:flex-row flex-col gap-5 font-openSans font-semibold font-base capitalize tracking-wider'
                    }
                >
                    <a target={'_blank'} href={'#'}>
                        Log in / Registration
                    </a>
                    <div
                        className={
                            'md:block hidden w-[1px] h-[30px] bg-gray-600'
                        }
                    />
                    <a target={'_blank'} href={'#'}>
                        Book Table
                    </a>
                </div>
                <div>
                    <img
                        src={'src/assets/menu-open.svg'}
                        className={'cursor-pointer'}
                        alt={'open menu icon'}
                        onClick={handleClick}
                    />
                </div>
            </div>
            {isOpened && (
                <div
                    className={
                        'absolute bg-black bottom-0 left-0 w-full h-full text-primary flex gap-4 justify-center items-center'
                    }
                >
                    <div className={'absolute right-10 top-10 p-2'}>
                        <img
                            src={'src/assets/menu-close.svg'}
                            className={' cursor-pointer'}
                            alt={'open menu icon'}
                            onClick={handleClick}
                        />
                    </div>
                    <ul
                        onClick={() => setIsOpened(false)}
                        className={
                            ' flex flex-col justify-center items-center font-cormorant font-semibold text-4xl tracking-wider gap-8 capitalize'
                        }
                    >
                        <li>
                            <a href={`#{home}`}>Home</a>
                        </li>
                        <li>
                            <a href={`#{pages}`}>Pages</a>
                        </li>
                        <li>
                            <a href={`#{contact}`}>Contact us</a>
                        </li>
                        <li>
                            <a href={`#{blog}`}>Blog</a>
                        </li>
                        <li>
                            <a href={`#{landing}`}>Landing</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
