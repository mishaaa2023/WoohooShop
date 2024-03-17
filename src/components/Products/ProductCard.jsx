import { Toast } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({img,name,desc,price,bname}) => {
  return (
    <div className=" p-4 w-full bg-red-500 text-white">
    <a className="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img}/>
    </a>
    <div className="mt-4">
      <h2 className="text-white title-font  font-medium text-2xl madimi-one-regular">{name}</h2>
      <h3 className="text-white text-xs tracking-widest title-font mb-1  text-1xl">{desc}</h3>
      <p className="mt-1">{price}</p>
      <button onClick={()=>{
          alert("Added Item")
        }} className='bg-white text-red-500 font-bold py-2 px-4 rounded mt-2 hover:bg-red-400 hover:text-white'>Buy Product</button>
    </div>
  </div>
  )
}

export default ProductCard