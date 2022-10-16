import React from 'react';
import { Button, Paragraph, SubTitle, Title } from './index.js';

const SubscribeForm = () => {
    return (
        <div className={'bg-[#0C0C0C] border border-primary/20'}>
            <div className={'max-w-[800px] mx-auto py-16 lg:px-0 px-8'}>
                <div
                    className={
                        'flex flex-col justify-center items-center md:gap-16 gap-24'
                    }
                >
                    <div
                        className={'flex flex-col justify-center items-center'}
                    >
                        <SubTitle
                            text={'Newsletter'}
                            style={'flex flex-col justify-center items-center'}
                        />
                        <Title text={'Subscribe to Our Newsletter'} />
                        <Paragraph
                            text={'And never miss latest Updates!'}
                            style={'text-white'}
                        />
                    </div>
                    <div
                        className={
                            'flex md:flex-row flex-col justify-center items-center w-full gap-8'
                        }
                    >
                        <input
                            placeholder={'Email Address'}
                            className={
                                'font-openSans font-semibold border border-[#F5EFDB] bg-inherit text-[#F5EFDB] outline-none w-full px-[20px] py-4'
                            }
                        />
                        <Button text={'Subscribe'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <section
            className={
                'bg-image bg-center bg-no-repeat bg-cover relative text-white'
            }
        >
            <div className={'max-w-[1300px] mx-auto '}>
                <div className={'min-h-screen flex flex-col '}>
                    <SubscribeForm />
                    <div
                        className={
                            'flex justify-between items-center md:flex-row flex-col text-center flex-wrap 2xl:px-0 px-12 mt-32 xl:gap-0 gap-8'
                        }
                    >
                        <div className={'flex-1'}>
                            <h3
                                className={
                                    'font-cormorant text-[#F5EFDB] text-[2rem] font-normal tracking-wider capitalize'
                                }
                            >
                                Contact Us
                            </h3>
                            <p
                                className={
                                    'font-openSans text-dimWhite font-normal text-base tracking-wider mt-6'
                                }
                            >
                                9 W 53rd St, New York, NY 10019, USA
                            </p>
                            <p
                                className={
                                    'font-openSans text-dimWhite font-normal text-base tracking-wider mt-2'
                                }
                            >
                                +1 212-344-1230
                                <br />
                                +1 212-555-1230
                            </p>
                        </div>
                        <div className={'flex-1'}>
                            <Title text={'Gerícht'} />
                            <SubTitle
                                text={
                                    '"The best way to find yourself is to lose yourself in the service of others.”'
                                }
                                style={
                                    'text-white text-base font-normal flex flex-col justify-center items-center gap-2 leading-[28px]'
                                }
                            />
                            <div
                                className={
                                    'flex justify-center items-center gap-4 mt-4'
                                }
                            >
                                <div>
                                    <img
                                        src={'src/assets/facebook.svg'}
                                        alt={'facebook'}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={'src/assets/instagram.svg'}
                                        alt={'instagram'}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={'src/assets/twitter.svg'}
                                        alt={'twitter'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'flex-1'}>
                            <h3
                                className={
                                    'font-cormorant text-[#F5EFDB] text-[2rem] font-normal tracking-wider capitalize'
                                }
                            >
                                Working Hours
                            </h3>
                            <p
                                className={
                                    'font-openSans text-dimWhite font-normal text-base tracking-wider mt-6 leading-[28px]'
                                }
                            >
                                Monday-Friday: <br />
                                08:00 am -12:00 am
                            </p>
                            <p
                                className={
                                    'font-openSans text-dimWhite font-normal text-base tracking-wider mt-2 leading-[28px]'
                                }
                            >
                                Saturday-Sunday: <br />
                                07:00am -11:00 pm
                            </p>
                        </div>
                    </div>
                    <footer
                        className={
                            'font-openSans text-dimWhite font-normal text-base tracking-wider text-center md:mt-auto mt-16 mb-16'
                        }
                    >
                        2022 Gerícht. All Rights reserved.
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Footer;
