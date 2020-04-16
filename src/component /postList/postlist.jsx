import React from 'react';
import Sidebar from '../sidebar/sidebar';


import './postlist.scss';

const PostList = () => {
    return(
        <div className='container'>
            <div className='left-side'>
                <Sidebar blocklists={}/>
            </div>
            <div className='mid-cont'>
                <div className='stories'>Stories</div>
                <div className='new-post'>Create New Post</div>
                <div className='list-post'>List of Post</div>
            </div>
            <div className='right-side'>
                <Sidebar blocklists={}/>
            </div>
        </div>
    )
};

export default PostList;
