import React from 'react';
import { images } from '../constants/index.js';

const SubTitle = ({ text = 'Hello', style }) => {
    return (
        <div className={`${style}`}>
            <h3 className={`font-cormorant font-bold text-[1.4375rem] text-white`}>
                {text}
            </h3>
            <div>
                <img src={images.spoon} alt={'spoon icon'} />
            </div>
        </div>
    );
};

export default SubTitle;
