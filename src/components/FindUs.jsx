import React from 'react';
import { Button, Paragraph, SubTitle, Title } from './index.js';

const FindUs = () => {
    return (
        <section>
            <div className={'max-w-[1300px] mx-auto'}>
                <div
                    className={
                        'min-h-screen flex md:flex-row flex-col justify-center items-center lg:gap-[120px] md:gap-12 gap-8 2xl:px-0 px-10 md:py-0 py-14'
                    }
                >
                    <div className={'flex flex-col md:gap-16 gap-8'}>
                        <div>
                            <SubTitle text={'Contact'} />
                            <Title text={'Find us'} />
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <div>
                                <Paragraph
                                    text={
                                        'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG'
                                    }
                                />
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3
                                    className={
                                        'font-cormorant text-primary font-bold text-[1.4375rem] tracking-wider'
                                    }
                                >
                                    Opening Hours
                                </h3>
                                <p
                                    className={
                                        'font-openSans text-white font-normal text-base tracking-wider'
                                    }
                                >
                                    Mon - Fri: 10:00 am - 02:00 am
                                </p>
                                <p
                                    className={
                                        'font-openSans text-white font-normal text-base tracking-wider'
                                    }
                                >
                                    Sat - Sun: 10:00 am - 03:00 am
                                </p>
                            </div>
                        </div>
                        <div>
                            <Button text={'Visit us'} />
                        </div>
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <div className={'max-w-[667px]'}>
                            <img
                                src={'src/assets/findus.png'}
                                alt={'find us cocktail'}
                                className={'w-full object-contain'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
