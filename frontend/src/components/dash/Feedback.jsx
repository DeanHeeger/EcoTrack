import React, { useState } from 'react';
import EcoLogo from '../../assets/eco_logo.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';

const Feedback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    frequency: "",
    mostUsedFeature: "",
    improvementSuggestion: "",
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    axios.post('/feedback', formData)
      .then((response) => {
        if (response.status === 200) {
          console.log('Feedback Submitted');
          setFormData({
            frequency: "",
            mostUsedFeature: "",
            improvementSuggestion: "",
            motivation: "",
          });
          setIsLoading(false);
          toast.success('Feedback Submitted')
        } else {
          console.error('Error submitting feedback')
          toast.error('Error submitting feedback')
        }
      }).catch((error) => {
        console.error('Network error:', error);
      })
  }

  return (
    <div className='pt-[25px] px-[50px]'>
      <div className='grid-cols-2 h-[85vh] gap-[25px] flex'>
        <div className='basis-[65%] flex-wrap bg-white rounded-lg p-6 px-14'>
            <h2 
              className='pb-8 text-4xl font-bold leading-snug flex items-center justify-center'
            >
              Help us improve
            </h2>
            <form onSubmit={handleSubmit}>
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text" 
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                placeholder='How often do you use our website?'
                required
              />
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text"
                name='mostUsedFeature'
                value={formData.mostUsedFeature}
                onChange={handleChange}
                placeholder='What is your most used feature?'
                required
              />
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text" 
                name='improvementSuggestion'
                value={formData.improvementSuggestion}
                onChange={handleChange}
                placeholder='What would you like to see improved the most?'
                required
              />
              <textarea
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-8' 
                type="text"
                name='motivation'
                value={formData.motivation}
                onChange={handleChange}
                placeholder='What is your motivation to use our website?'
                required
              />
              <button
                  disabled={isLoading}
                  type='submit' 
                  className='flex items-center text-center justify-center px-6 w-56 h-14 text-white rounded-xl bg-gradient-to-r from-black to-primaryGreen mt-4 mx-auto shadow-right-bottom'
              >
                  <svg 
                      className='h-auto w-6 mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z" fill="rgba(255,255,255,1)"></path>
                  </svg>
                  {isLoading ? (
                      <ThreeDots 
                        height="70" 
                        width="70" 
                        radius="9"
                        color="#fff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      /> 
                  ) : (  
                      'Send Message'
                  )}
              </button>
            </form>
        </div>
        <div className='basis-[45%] h-[65vh] flex items-center justify-center m-8'>
          <img 
            className='h-full' 
            src={EcoLogo} 
            alt="Logo" 
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;