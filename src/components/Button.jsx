import React from 'react';

const Button = ({ text = 'Text', styles }) => {
    return (
        <button
            className={`text-secondary bg-primary font-cormorant font-bold text-base capitalize px-8 py-2  ${styles}`}
        >
            {text}
        </button>
    );
};

export default Button;
