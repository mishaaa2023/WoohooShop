import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/Products/ProductCard'

function HomePage() {
 const navigate=useNavigate()
  const gotoshopnow=()=>{
     navigate('/shopnow')
  }
  return (
    <>
    <section className="text-gray-600 body-font mt-9">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-500 madimi-one-regular">Buy Amazing products
       
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, recusandae vel iure nisi aliquam earum ipsam eius similique a inventore, facere esse.lorem18 Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"onClick={gotoshopnow}>Shop now</button>
        {/* <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-full" alt="hero" src="image1.avif"/>
    </div>
  </div>
</section>

<section>
<h1 className='text-4xl text-red-500 mx-auto text-center madimi-one-regular '>
      Best Products
    </h1>
  
<div className='flex items-center gap-3 flex-wrap justify-evenly'>
<div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img.webp'}name={'Designer Purse'}desc={'This purse is perfect for women who like to go to parties'}price={'$12.00'}/>
  </div>

  <div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img1.webp'}name={'Makeup'}desc={'This is a makeup set and is our most sold products'}price={'$12.00'}/>
  </div>

  <div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img2.webp'}name={'Earrings'}desc={'These are also one of our most sold products..'}price={'$12.00'}/>
  </div>

  <div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img3.jfif'}name={'Beautiful Dress'}desc={'This dress is perfect for Ramdan and...'}price={'$12.00'}/>
  </div>

  <div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img5.webp'}name={'Different LipSticks'}desc={'You can get different shades in these lipsticks...'}price={'$12.00'}/>
  </div>

  <div className='flex flex-wrap py-6 px-6 mt-6'>
      <ProductCard img={'img4.jfif'}name={'Ramdan Decoration Lamp'}desc={'This is a ramdan lamp for decoration'}price={'$12.00'}/>
  </div>

 
</div>
   
    
  
  
</section>
    </>
  )
}

export default HomePage