import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-xl font-bold">Hi, my name is</h1>
                <h1 className='text-4xl my-3 text-blue-400'>Md Abul Hasanat</h1>
                <h2 className='text-4xl text-gray-600'>I am a front end developer</h2>
                <p className="py-6 text-gray-500">I'm a Front-End Developer. I can build user-friendly websites and web applications.I have serious passion for creating user-friendly websites.</p>
                <a href='https://drive.google.com/file/d/1C_WaTtp_d1rcwIIZeWcqpjWGPKVDCBZO/view?usp=sharing' target="_blank" className="btn btn-primary">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;