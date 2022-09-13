import React from 'react';
import { Button, Paragraph, Title } from './index.js';

const History = () => {
    return (
        <section id={'history'}>
            <div
                className={
                    'bg-[url("src/assets/bg.png")] bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center items-center relative z-0'
                }
            >
                <div className={'absolute top-50 left-50 z-10'}>
                    <img
                        src={'src/assets/G.png'}
                        alt={'g letter'}
                        className={'w-[391px] '}
                    />
                </div>
                <div className={'absolute top-50 left-50 z-20 '}>
                    <img
                        src={'src/assets/knife.png'}
                        alt={'knife photo'}
                        className={'w-[84px]'}
                    />
                </div>
                <div
                    className={
                        'max-w-[1300px] mx-auto flex justify-center items-end z-20 gap-[254px]'
                    }
                >
                    <div
                        className={
                            'flex flex-col justify-center items-end gap-8'
                        }
                    >

                        <div className={'rotate-180'}>
                            <img
                                src={'src/assets/spoon.svg'}
                                alt={'spoon icon'}
                            />
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
                        className={'flex flex-col justify-center items-start '}
                    >
                        <Title text={'Our History'} />
                        <div className={''}>
                            <img
                                src={'src/assets/spoon.svg'}
                                alt={'spoon icon'}
                            />
                        </div>
                        <Paragraph
                            text={
                                'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.'
                            }
                            style={'text-start mt-8'}
                        />
                        <Button text={'Know More'} styles={'mt-8'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
