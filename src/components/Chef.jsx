import React from 'react';
import { Paragraph, SubTitle, Title } from './index.js';
import { images } from '../constants';

const Chef = () => {
    return (
        <section>
            <div
                className={`bg-image bg-center bg-no-repeat bg-cover lg:pt-0 pt-10`}
            >
                <div
                    className={
                        'min-h-screen lg:max-w-[1300px] max-w-[700px] mx-auto flex lg:flex-row flex-col justify-center items-center lg:gap-[96px] gap-10 lg:px-0 px-10 '
                    }
                >
                    <div className={'flex-1 lg:max-w-[80vw] max-w-lg'}>
                        <img src={images.chef} alt={'chef picture'} />
                    </div>
                    <div
                        className={
                            'flex-1 flex flex-col justify-between items-start gap-16'
                        }
                    >
                        <div>
                            <SubTitle text={'Chef’s Word'} />
                            <Title text={'What we believe in'} />
                        </div>
                        <div>
                            <Paragraph
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.'
                                }
                                style={'italic'}
                            />
                        </div>
                        <div>
                            <h3
                                className={
                                    'font-cormorant text-primary font-normal text-[2rem] leading-[42px] tracking-wider'
                                }
                            >
                                Kevin Luo
                            </h3>
                            <h4
                                className={
                                    'font-openSans text-dimWhite font-normal text-base tracking-wider'
                                }
                            >
                                Chef & Founder
                            </h4>
                        </div>
                        <div className={'w-[235px]'}>
                            <img
                                src={images.sign}
                                alt={"chef's sign"}
                                className={'w-full object-contain'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chef;
