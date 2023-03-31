import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center justify-between lg:container mx-auto px-4 py-2'>
           <div>
                <h3 className='md:text-3xl font-bold'>Knowledge Cafe</h3>
           </div>
           <div>
                <img className='h-16 w-16 rounded-full' src='https://images.unsplash.com/photo-1677856217095-65c6e0e4bd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='user image' />
           </div>
        </div>
    );
};

export default Header;