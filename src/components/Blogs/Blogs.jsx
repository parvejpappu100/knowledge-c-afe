import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmarked/Bookmark';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    const [bookmark , setBookmark] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    const handleCountReadTime = (time) => {
        setBookmark([...bookmark , time]);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:container mx-auto'>
            <div className='col-span-2 row-span-2 '>
            {
                blogs.map(blog => <Blog 
                    blog = {blog}
                     key = {blog.id}
                     handleCountReadTime = {handleCountReadTime}
                     ></Blog>)
            }
            </div>
            <div  className='sticky top-0'>
                <Bookmark bookmark = {bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;