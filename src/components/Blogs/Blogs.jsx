import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmarked/Bookmark';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:container mx-auto'>
            <div className='col-span-2 row-span-2 '>
            {
                blogs.map(blog => <Blog blog = {blog} key = {blog.id}></Blog>)
            }
            </div>
            <div className='border-gray-400 border'>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;