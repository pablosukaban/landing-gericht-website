import React from 'react';

const SubTitle = ({ text = 'Hello', style }) => {
    return (
        <div>
            <h3
                className={`font-cormorant font-bold text-[1.4375rem] ${style}`}
            >
                {text}
            </h3>
            <img src={'src/assets/spoon.svg'} alt={'spoon icon'} />
        </div>
    );
};

export default SubTitle;
