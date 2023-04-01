import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import Count from '../Count/Count';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    const [blogInfo , setBlogInfo] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    const handleCountReadTime = (blog) => {
        setBlogInfo([...blogInfo , blog]);
    }

    const [bookmark , setBookmark] = useState([]);

    const handleBookmark = (blog) => {
        const exits = bookmark.find(book => book.id == blog.id)
        if(exits){
            toast.warning("This blog is already exits ")
            return;
        }
        setBookmark([...bookmark , blog]);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:container mx-auto'>
            <div className='col-span-2 row-span-2 '>
            {
                blogs.map(blog => <Blog 
                    blog = {blog}
                     key = {blog.id}
                     handleCountReadTime = {handleCountReadTime}
                     handleBookmark = {handleBookmark}
                     ></Blog>)
            }
            </div>
            <div  className='sticky top-0'>
                <Count blogInfo = {blogInfo}></Count>
                <Bookmark bookmark = {bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;