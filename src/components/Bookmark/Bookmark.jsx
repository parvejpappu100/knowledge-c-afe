import React from 'react';
import BlogName from '../BlogName/BlogName';

const Bookmark = ({bookmark}) => {
    return (
            <div>
                <div className='shadow-lg bg-gray-200 p-2 rounded-md'>
                    <h3 className='text-2xl font-semibold '> Bookmarked Blogs : {bookmark.length}</h3>
                </div>
                <div>
                    {
                        bookmark.map(blog => <BlogName blog = {blog} key= {blog.id}></BlogName>)
                    }
                </div>
            </div>
    );
};

export default Bookmark;