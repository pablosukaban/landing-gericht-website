import React from 'react';
import { SubTitle, Title } from './index.js';
import { data } from '../constants';

const LaurelItem = ({ imgUrl, title, subtitle }) => {
    return (
        <div className={`flex justify-center items-center gap-8 `}>
            <div className={' flex justify-center items-center'}>
                <img
                    src={imgUrl}
                    alt={'laurel picture'}
                    className={'pointer-events-none object-contain w-full'}
                />
            </div>
            <div>
                <h3
                    className={
                        'font-cormorant text-primary font-bold text-[1.4375rem] capitalize tracking-wider'
                    }
                >
                    {title}
                </h3>
                <p
                    className={
                        'font-openSans font-normal text-base text-dimWhite tracking-wider'
                    }
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

const Laurels = () => {
    return (
        <section
            className={
                'bg-[url("src/assets/bg.png")] bg-center bg-no-repeat bg-cover relative'
            }
        >
            <div
                className={
                    'min-h-screen max-w-[1300px] mx-auto flex justify-center items-center 2xl:px-0 px-10 '
                }
            >
                <div
                    className={
                        'lg:block hidden absolute top-10 left-10 w-[143px] h-[143px]'
                    }
                >
                    <img
                        src={'src/assets/logo.png'}
                        alt={'logo image'}
                        className={'w-full '}
                    />
                </div>
                <div
                    className={
                        'flex justify-center items-center md:flex-row flex-col  lg:gap-0 gap-16 '
                    }
                >
                    <div
                        className={
                            'flex flex-col justify-center items-start  2xl:mr-[100px] mr-4'
                        }
                    >
                        <div>
                            <SubTitle text={'Awards & recognition'} />
                            <Title text={'Our Laurels'} />
                        </div>
                        <div
                            className={
                                'grid lg:grid-cols-2 grid-cols-1 gap-8 mt-16'
                            }
                        >
                            {data.awards.map((item, index) => (
                                <LaurelItem
                                    id={item.title}
                                    {...item}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className={
                            'flex justify-center items-center max-w-[555px]'
                        }
                    >
                        <img
                            src={'src/assets/laurels.png'}
                            alt={'laurel meal'}
                            className={'w-full object-contain '}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Laurels;
