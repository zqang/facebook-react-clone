import React from 'react';
import Block from '../block/block';

import './blocklist.scss';


const Blocklist = ({lists}) => {
    return (
        <div>
            <ul>
                {
                    lists.maps(list => {
                        const {name, imageUrl} = list;

                        return(
                            <li>
                                <Block name={name} imageUrl={imageUrl} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Blocklist;

