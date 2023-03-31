import React from 'react';

const BlogName = ({blog}) => {
    return (
        <div  className='shadow-lg bg-gray-200 p-2 rounded-md my-3'>
            <h3 className='text-2xl font-semibold '>{blog.blogName}</h3>
        </div>
    );
};

export default BlogName;