import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='mt-10  bg-blue-800 text-white py-20'>

                <div className='container mx-auto  grid grid-cols-2 gap-5 p-2 md:flex md:justify-between'>
                    <div>
                        <h2 className='text-2xl py-2 font-semibold'>Athlete Escapes</h2>
                        <p className='text-sm   py-2'>Join Athlete Escapes to Became a Champion!</p>
                        <div>
                            <img src={''} alt="" />
                        </div>


                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Company</h2>
                        <p className='text-sm my-2'>About Us</p>
                        <p className='text-sm my-2'>Work</p>
                        <p className='text-sm my-2'>Latest News</p>
                        <p className='text-sm my-2'>Careers</p>



                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Product</h2>
                        <p className='text-sm my-2'>Prototype</p>
                        <p className='text-sm my-2'>Plan & Pricing</p>
                        <p className='text-sm my-2'>Customers</p>
                        <p className='text-sm my-2'>Integrations</p>

                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Support</h2>
                        <p className='text-sm my-2'>Help Desk</p>
                        <p className='text-sm my-2'>Sales</p>
                        <p className='text-sm my-2'>Become a Partner</p>
                        <p className='text-sm my-2'>Developers</p>

                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Contact</h2>
                        <p className='text-sm my-2'>Near Your Home, 24/7</p>
                        <p className='text-sm my-2'>+88001714829669</p>
                        <p className='text-sm my-2'>+881912986822</p>
                        <div className='space-x-5 flex'>
            
            
                        <a href="https://github.com/Diptho" target='_blank'> <FaGithub></FaGithub></a> 
                    </div>
                        <p className='text-sm my-2'>rakib.ahammed.diptho@g.bracu.ac.bd</p>

                    </div>



                </div>
                <hr className='text-white bg-white my-5 container mx-auto' />

                <div className='container mx-auto md:flex justify-between'>
                    <p><small>@ <b>Athlete Escapes.</b> All Right Reserved</small></p>
                    <p>Powered by <b>Rakib Ahammed Diptho</b></p>
                </div>


            </div>

        </div>
    );
};

export default Footer;