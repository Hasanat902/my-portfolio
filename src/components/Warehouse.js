import React from 'react';
import warehouse from '../images/warehouse.png';
import warehouse2 from '../images/warehouse2.png';
import warehouse3 from '../images/warehouse3.png';

const Warehouse = () => {
    return (
        <div className='bg-gray-100 p-5'>
            <h2 className='text-2xl text-center text-info font-bold mb-5'>Car Warehouse Management</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img src={warehouse} className="w-80 h-48 mb-5" alt="" />
                    <img src={warehouse2} className="w-80 h-48 mb-5" alt="" />
                    <img src={warehouse3} className="w-80 h-48" alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Features :</h2>
                    <ul className='ml-10'>
                        <li>- Login and Register System for Users.</li>
                        <li>- Login users can add products and also see their own added products.</li>
                        <li>- Product quantity decreases dynamically after delivering that product.</li>
                        <li>- If the user login he/she can see many options otherwise not.</li>
                        <li>- Users can restock the products.</li>
                    </ul>
                    <h2 className='text-xl font-bold mt-2'>Used Technologies :</h2>
                    <p className='ml-10'>- React, React Router, Expressjs, MongoDB, Firebase, React Bootstrap.</p>
                    <div className='mt-5'>
                        <a className='btn btn-info btn-sm mr-10' href="https://github.com/Hasanat902/warehouse-management-client-side">Github Client</a>
                        <a className='btn btn-info btn-sm' href="https://github.com/Hasanat902/warehouse-management-server-side">Github Server</a>
                    </div>
                    <a className='btn btn-primary btn-sm mt-5' href="https://warehouse-management-cli-9103e.web.app/">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Warehouse;