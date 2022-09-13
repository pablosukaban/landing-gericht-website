import React from 'react';

const Paragraph = ({ text, style }) => {
    return (
        <p className={`font-openSans text-dimWhite font-base tracking-wider ${style}`}>
            {text}
        </p>
    );
};

export default Paragraph;
