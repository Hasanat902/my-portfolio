import React from 'react';
import manufacturer from '../images/manufacturer.png';
import manufacturer2 from '../images/manufacturer2.png';
import manufacturer3 from '../images/manufacturer3.png';

const Manufacturer = () => {
    return (
        <div className='bg-gray-100 p-5'>
            <h2 className='text-2xl text-center text-info font-bold mb-5'>Computer Parts Manufacturer</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img src={manufacturer} className="w-80 h-48 mb-5" alt="" />
                    <img src={manufacturer3} className="w-80 h-48 mb-5" alt="" />
                    <img src={manufacturer2} className="w-80 h-48" alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Features :</h2>
                    <ul className='ml-10'>
                        <li>- Email-password and Google Authentication created by firebase.</li>
                        <li>- Difference between admin and user route. Admin cannot access user route and user cannot access admin route.</li>
                        <li>- Users can give reviews and admins can added products and also delete products.</li>
                        <li>- In the dashboard, my profile route users and admin both can give or update their personal information.</li>
                        <li>- If the user is created they can buy products and also give payment.</li>
                    </ul>
                    <h2 className='text-xl font-bold mt-2'>Used Technologies :</h2>
                    <p className='ml-10'>- React, React Router, Nodejs, Expressjs, MongoDB, Tailwind, Firebase.</p>
                    <div className='mt-5'>
                        <a className='btn btn-info btn-sm mr-10' href="https://github.com/Hasanat902/computer-parts-manufacturer-client-side">Github Client</a>
                        <a className='btn btn-info btn-sm' href="https://github.com/Hasanat902/computer-parts-manufacturer-server-side">Github Server</a>
                    </div>
                    <a className='btn btn-primary btn-sm mt-5' href="https://manufacturer-website-cli-c6a77.web.app/">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Manufacturer;