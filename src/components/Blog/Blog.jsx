import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { image , userName , userImage , published_in , blogName , time} = props.blog;
    const handleCountReadTime = props.handleCountReadTime;
    const handleBookmark = props.handleBookmark;

    return (
        <div className='mb-5 shadow-lg p-3 rounded-lg'>
           <div>
                <img className='rounded-xl' src={image} />
                <div className='flex justify-between my-4'>
                    <div  className='flex items-center gap-3'>
                        <div>
                            <img className='h-16 w-16 rounded-full' src={userImage} />
                        </div>
                        <div>
                            <h3>{userName}</h3>
                            <p>{published_in}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{time} min read</p>
                        <button onClick={() => handleBookmark(props.blog)}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </div>
                </div>
                <h3 className='text-3xl font-bold mb-4'>{blogName}</h3>
                <button onClick={() => handleCountReadTime(props.blog)} className='my-6 text-blue-600 underline underline-offset-4 font-bold'>
                    Mark as read
                </button>
           </div>
        </div>
    );
};

export default Blog;