import React from 'react';
import { Button, Paragraph, SubTitle, Title } from './index.js';

const Header = () => {
    return (
        <header className={'w-full text-white pt-12'}>
            <div className={'flex lg:flex-row flex-col max-w-screen-2xl items-center px-[190px] mx-auto xl:gap-[180px] gap-10'}>
                <div className={'flex flex-col justify-center items-start max-w-[453px]'}>
                    <SubTitle text={'Chase the new Flavour'} style={''} />
                    <Title
                        text={'The key to Fine dining'}
                        style={'sm:text-[90px] text-[72px] mt-8'}
                    />
                    <Paragraph
                        text={
                            'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus '
                        }
                        style={'mt-8'}
                    />
                    <Button text={'Explore Menu'} styles={'mt-8'}/>
                </div>
                <div className={'flex justify-start items-center min-w-[400px] '}>
                    <img
                        className={'w-full'}
                        src={'src/assets/welcome.png'}
                        alt={'welcome meal image'}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
