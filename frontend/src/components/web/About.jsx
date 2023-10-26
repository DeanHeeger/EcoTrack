import React from 'react';
import Dash from "../../assets/dash.png";

const About = () => {
    return (
        <section id="about" className='container pt-40'>
            <div className="relative md:flex md:items-center text-center">
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 
                        className="text-5xl font-thin max-w-full mb-10 text-white"
                    >
                        Redefining <span className='text-gradient'>Waste Management</span>
                    </h2>
                    <p 
                        className="text-white font-thin text-lg max-w-4xl leading-8"
                    >
                        At EcoTrack Solutions, we are on a mission to build a sustainable future by revolutionizing waste management practices. We understand the critical importance of environmental preservation and the need for responsible waste management to combat the global challenges we face. With a focus on innovation, we strive to develop cutting-edge solutions that minimize waste, optimize resource utilization, and promote a circular economy. Our team of passionate experts is dedicated to creating sustainable waste management systems that reduce environmental impact while fostering economic growth. Through collaborative partnerships and a commitment to continuous improvement, we are proud to have already achieved significant milestones in waste reduction and environmental stewardship. Join us as we pave the way towards a cleaner, greener, and more sustainable future for generations to come.
                    </p>
                </div>
                <img 
                    className="absolute md:relative top-0 right-0 pl-44 ml-20 transform-gpu pb-40 scale-125 md:w-1/2" 
                    src={Dash}
                    alt="About us" 
                />
            </div>
        </section>
    )
}

export default About;