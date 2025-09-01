import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we believe shopping should be simple, enjoyable, and inspiring. Founded with the vision of bringing quality products closer to every customer, we strive to blend affordability with style. Our journey began with a passion for making everyday essentials and trendy finds easily accessible to all.</p>
          <p>From fashion to lifestyle products, we carefully curate every item with our customers in mind. Our mission is not just to sell, but to build trust and long-lasting relationships by delivering products that enhance your life.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is simple: to make quality shopping accessible, affordable, and enjoyable for everyone.

            We are driven by three core values:</p>
          <p>Trust – Building long-lasting relationships with our customers through genuine service.

            Quality – Offering products that are carefully curated and built to last.

            Innovation – Continuously improving our platform to deliver a seamless shopping experience.

            We believe shopping should not just be about buying, but about discovering, connecting, and enjoying the journey. Every step we take is guided by our promise to bring you the best products, the best service, and the best experience.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p>At ShopEase, we believe in delivering only the best. Every product is carefully selected and goes through strict quality checks before it reaches you. Our commitment ensures that you get authentic, durable, and reliable items every time you shop with us.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p>our time matters. That’s why we’ve designed our platform to give you a seamless shopping experience—from easy navigation and secure payment options to fast doorstep delivery. With just a few clicks, your favorite products are on their way.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Services</b>
          <p>We go beyond selling products—we deliver experiences. Our dedicated support team is always ready to help, ensuring your concerns are addressed quickly and professionally. At ShopEase, we aim to provide service that makes you feel valued at every step.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
