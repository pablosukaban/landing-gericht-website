import React from 'react';

const Button = ({ text = 'Text', styles }) => {
    return (
        <button
            className={`text-secondary hover:text-primary bg-primary hover:bg-secondary font-cormorant font-bold text-base capitalize border border-secondary hover:border-primary px-8 py-2 transition-colors  ${styles}`}
        >
            {text}
        </button>
    );
};

export default Button;
