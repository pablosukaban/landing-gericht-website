import React from 'react';

const SubTitle = ({ text = 'Hello', style }) => {
    return (
        <div className={`${style}`}>
            <h3 className={`font-cormorant font-bold text-[1.4375rem] text-white`}>
                {text}
            </h3>
            <div>
                <img src={'src/assets/spoon.svg'} alt={'spoon icon'} />
            </div>
        </div>
    );
};

export default SubTitle;
