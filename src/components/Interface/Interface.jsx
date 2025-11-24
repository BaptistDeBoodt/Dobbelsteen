import React from 'react';

const Interface = ({ selectedPOI, setSelectedPOI }) => {
    if (!selectedPOI) {
        return null;
    }

    const { title, description, image } = selectedPOI;

    return (
        <div className='interface'>
            {image && 
                <img src={image} alt={image} />
            }
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => setSelectedPOI(null)}>Close</button>
        </div>
    );
};

export default Interface;
