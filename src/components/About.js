import React from 'react';
import hasanat from '../images/hasanat.png';

const About = () => {
    return (
        <div id='about' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14 mb-20'>
            <div>
                <img className='w-72 h-72 rounded-lg mx-auto' src={hasanat} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold border-b-2 mb-5'>About Me</h2>
                <p className='text-gray-500 mb-5'>I am a Front End Developer. I can build user-friendly websites and web applications. I am skilled in Javascript, React Js, HTML5, CSS3, Firebase, Tailwind CSS and Bootstrap.<br></br> I am also comfortable working with Node Js, Express Js, and MongoDB. I am looking forward to an opportunity to work with an organization that offers challenging tasks where I can utilize my skills and abilities.</p>
                <button className='btn btn-primary'>Hire Me</button>
            </div>
        </div>
    );
};

export default About;