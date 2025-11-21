import React from 'react';

const Interface = ({ selectedPOI }) => {
    if (!selectedPOI) {
        return (null);
    }

    const { title, description } = selectedPOI;

    return (
        <div className='interface'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Interface;