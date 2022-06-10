import React from 'react';
import authentic from '../images/authentic.png';
import authentic2 from '../images/authentic2.png';
import authentic3 from '../images/authentic3.png';

const Authentic = () => {
    return (
        <div className='bg-gray-100 p-5'>
            <h2 className='text-2xl text-center text-info font-bold mb-5'>Authentic Homemade Food</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img src={authentic} className="w-80 h-48 mb-5" alt="" />
                    <img src={authentic2} className="w-80 h-48 mb-5" alt="" />
                    <img src={authentic3} className="w-80 h-48" alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Features :</h2>
                    <ul className='ml-10'>
                        <li>- Login and Register System for Users.</li>
                        <li>- If anyone wants to order food he has to register or log in first.</li>
                        <li>- During registration the user gets a verification email.</li>
                        <li>- Users can order different types of packages from here.</li>
                        <li>- Users can read some blogs here.</li>
                    </ul>
                    <h2 className='text-xl font-bold mt-2'>Used Technologies :</h2>
                    <p className='ml-10'>- React, React Router, Firebase, React Bootstrap.</p>
                    <div className='mt-5'>
                        <a className='btn btn-info btn-sm' href="https://github.com/Hasanat902/independent-service-provider">Github Client</a>
                    </div>
                    <a className='btn btn-primary btn-sm mt-5' href="https://independent-service-prov-5cd6e.web.app/">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Authentic;