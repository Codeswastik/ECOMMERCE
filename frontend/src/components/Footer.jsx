import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Forever, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Forever shopping app has managed to keep up without any hiccups. In addition, Forever has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Forever Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Forever app. Download the Forever app on your Android or IOS device today and experience shopping like never before!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>
                        COMPANY
                    </p>

                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>America@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright2090@forever.com-all right reserved</p>
            </div>

        </div>
    )
}

export default Footer
