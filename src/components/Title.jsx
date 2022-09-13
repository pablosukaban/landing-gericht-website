import React from 'react';

const Title = ({ text = 'Hello', style }) => {
    return (
        <h1
            className={`font-cormorant text-[4rem] font-bold text-primary tracking-wider ${style}`}
        >
            {text}
        </h1>
    );
};

export default Title;
