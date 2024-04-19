import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => 
 {
    return (
        <div >
            <Sidebar>
                <div className='bg-gray-100 min-h-screen'>
                    {children}
                </div>    
            </Sidebar>
        </div>
    );
};

export default DashboardLayout;