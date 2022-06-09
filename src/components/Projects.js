import React from 'react';
import manufacturer from '../images/manufacturer.png';
import warehouse from '../images/warehouse.png';
import authentic from '../images/authentic.png';

const Projects = () => {
    return (
        <div id='projects' className='mb-12'>
            <h2 className='text-4xl text-center font-bold mt-16 mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-5'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={manufacturer} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Computer Parts Manufacturer</h2>
                        <p className='text-gray-500'>This is a computer parts manufacturer site. When user login this site they can order products and also give review. Admin can added product.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={warehouse} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Car Warehouse Management</h2>
                        <p className='text-gray-500'>This is a car warehouse management site. Login users can added products for order and also see their added products.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={authentic} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Authentic Homemade Food</h2>
                        <p className='text-gray-500'>This is authentic homemade food site. Here customer can find different types of food packages.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;