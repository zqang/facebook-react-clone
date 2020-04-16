import React from 'react';

import './button.scss';


const Button = ({imageUrl, buttonName}) => {
    return(
        <button>
            <img src={imageUrl} alt={buttonName}/>
            <span>{buttonName}</span>
        </button>
    )
};

export default Button;