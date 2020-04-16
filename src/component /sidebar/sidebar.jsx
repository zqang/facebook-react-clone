import React,{useState} from 'react';
import Blocklist from '../blocklist/blocklist';

import './sidebar.scss';


const Sidebar = blocklists => {
    const [separate, setSeparate] = useState(true);
    
    return(
        <div>
            {
                blocklists.maps(blocklist => {
                    const {list} = blocklist;
                    return(
                        <div>
                            <Blocklist lists={list} />
                            <div className={separate ? 'separator' : null}></div>
                        </div>
                    )    
                })
            }
        </div>
    )
};

export default Sidebar;

