import React from 'react';

const Bookmark = ({bookmark}) => {
    let totalReadTime = 0;
    for (const blog of bookmark){
        totalReadTime = blog.time + totalReadTime;
    }
    return (
        <div>
            <div className='bg-gray-200 p-2 border-blue-400 mb-4 border'>
                <h1 className='text-2xl text-blue-500 font-semibold'>Spent time on read : {totalReadTime} minute</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Bookmark;