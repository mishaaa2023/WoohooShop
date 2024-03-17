import React from 'react'
import ProductCard from '../components/Products/ProductCard'
function ShopPage() {
  return (
    <>
    <section>
<h1 className='text-4xl text-red-500 mx-auto text-center madimi-one-regular '>
      Latest Products
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

export default ShopPage