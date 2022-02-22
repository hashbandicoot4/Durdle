import React from 'react';

const OutputBox = ({ char, col }) => {
    return (
        <div
            style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: col,
                color: '#fff',
                fontSize: '1.7rem',
            }}
        >
            <p>{char}</p>
        </div>
    );
};

export default OutputBox;
