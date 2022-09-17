import React from 'react';
import { Button, SubTitle, Title } from './index.js';
import { data } from '../constants/';

// {
//     title: 'Chapel Hill Shiraz',
//         price: '$56',
//     tags: 'AU | Bottle',
// },

const SpecialMenuList = ({ title, list }) => {
    return (
        <div className={'flex-1 flex flex-col justify-center items-center'}>
            <h1
                className={
                    'font-cormorant font-semibold text-[2.7rem] leading-[58px] text-center tracking-wider capitalize'
                }
            >
                {title}
            </h1>
            <ul
                className={
                    'w-full flex flex-col justify-center items-start gap-[40px] mt-12'
                }
            >
                {list.map((item) => (
                    <li
                        key={item.title}
                        className={'w-full flex flex-col '}
                    >
                        <div className={'flex justify-between items-center'}>
                            <span
                                className={
                                    'flex-1 font-cormorant text-primary text-[1.4375rem] tracking-wider capitalize font-bold leading-[30px] lg:mr-8 mr-4'
                                }
                            >
                                {item.title}
                            </span>
                            <div
                                className={'w-[119px] h-[1px] bg-[#FAFAFA] '}
                            />
                            <span
                                className={
                                    'font-cormorant text-[1.4375rem] tracking-wider capitalize font-bold leading-[130%] lg:ml-8 ml-4'
                                }
                            >
                                {item.price}
                            </span>
                        </div>
                        <div
                            className={
                                'font-openSans text-dimWhite text-base font-normal'
                            }
                        >
                            {item.tags}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TodaySpecial = () => {
    return (
        <section className={'text-white'}>
            <div
                className={
                    'min-h-screen max-w-[1300px] mx-auto flex flex-col justify-center items-center gap-8 py-8 2xl:px-0 px-10 '
                }
            >
                <div>
                    <SubTitle text={'Menu that fits you palette'} style={'leading-[30px] flex flex-col justify-center items-center gap-4'} />
                    <Title text={`Today's Special`} style={'leading-[83px]'}/>
                </div>
                <div className={'flex md:flex-row flex-col justify-center items-center gap-8 '}>
                    <SpecialMenuList
                        title={'Wine & Beer'}
                        list={data.wines}
                    ></SpecialMenuList>
                    <div className={'flex-1 hidden lg:block'}>
                        <img
                            src={'src/assets/menu.png'}
                            className={'w-full object-contain'}
                            alt={'special menu drinks'}
                        />
                    </div>
                    <SpecialMenuList
                        title={'Cocktails'}
                        list={data.cocktails}
                    />
                </div>

                <Button text={'View More'} />
            </div>
        </section>
    );
};

export default TodaySpecial;
