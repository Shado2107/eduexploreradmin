import React from 'react';

const Header = ({title}: {title: string}) => {
    return (
       <div className='flex justify-between p-4'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
       </div>
    );
};

export default Header;