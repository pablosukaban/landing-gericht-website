import React from 'react';
import { Button, Paragraph, Title } from './index.js';
import { images } from '../constants/index.js';

const History = () => {
    return (
        <section id={'history'}>
            <div
                className={
                    'bg-[url("public/bg.png")] bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center items-center relative z-0'
                }
            >
                <div className={'absolute top-50 left-50 z-10'}>
                    <img
                        src={images.G}
                        alt={'g letter'}
                        className={'w-[391px] '}
                    />
                </div>
                <div
                    className={'absolute top-50 left-50 z-20 md:inline hidden '}
                >
                    <img
                        src={images.knife}
                        alt={'knife photo'}
                        className={'w-[84px]'}
                    />
                </div>
                <div
                    className={
                        'max-w-[1300px] mx-auto flex md:flex-row flex-col-reverse justify-center  md:items-end items-center z-20 md:gap-[254px] gap-5 md:px-0 px-10'
                    }
                >
                    <div
                        className={
                            'flex flex-col justify-center md:items-end items-center gap-8'
                        }
                    >
                        <div className={'rotate-180'}>
                            <img src={images.spoon} alt={'spoon icon'} />
                        </div>
                        <Paragraph
                            text={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.'
                            }
                            style={'text-end '}
                        />
                        <Button text={'Know More'} />
                    </div>
                    <div
                        className={
                            'flex flex-col justify-center md:items-start items-center'
                        }
                    >
                        <Title text={'Our History'} />
                        <div className={''}>
                            <img src={images.spoon} alt={'spoon icon'} />
                        </div>
                        <Paragraph
                            text={
                                'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.'
                            }
                            style={'text-start mt-8'}
                        />
                        <Button
                            text={'Know More'}
                            styles={'mt-8 md:block hidden'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
