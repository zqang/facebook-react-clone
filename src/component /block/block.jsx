import React from 'react';

import './block.scss';

const Block = ({name, imageUrl}) => {
    return(
        <div>
            <img src={imageUrl} alt={name}/>
            <span>{name}</span>
        </div>
    )
};

export default Block;

