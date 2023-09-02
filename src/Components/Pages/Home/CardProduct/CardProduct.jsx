import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = () => {
    return (
        <div className='flex lg:flex-row flex-col mt-20'>
          <div>
            <h1 className='text-6xl text-left text-clip'>SkinCare Products</h1>
            <h1 className='text-xl font-serif text-left mt-20'>Pronounced “Suhl-ha-soo," this skincare brand was founded on the philosophy of balance. Utilising Korea's finest natural ingredients, Sulwhasoo is one of the best selling Korean brands on the market.</h1>
            <button className='text-left text-xl px-8 py-2 mt-4 bg-yellow-200'>Go to Link</button>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 space-y-2 lg:space-y-3'>
         <Link to='/facewash' class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://i.ibb.co/j845pYG/images-5-removebg-preview.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      FaceWash
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Korean Skincare Products</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
        Get ready for a skincare journey like no other. In Korean skincare, natural ingredients are blended with powerful actives to give you a healthy, hydrated and dewy complexion.
        </p>
  <button className='text-2xl bg-lime-700 px-2 rounded-md'>Get Touch</button>
      </div>
    </div>
  </div>
</Link>   

<Link to='/cream' href="/" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://i.ibb.co/P13j5q4/images-1-removebg-preview.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      cream
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Korean Skin-Care</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
        Best Korean Skin-Care Products ; Best Eye Cream · Belif Moisturizing Eye Bomb, $48 ; Best Sunscreen · Neogen Day-Light Protection Airy Sunscreen, ...
        </p>
        <button className='text-2xl bg-orange-700 px-2 rounded-md'>Get Touch</button>

      </div>
    </div>
  </div>
</Link>  

<Link to='/lotion' href="/" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://i.ibb.co/gMFSn72/download-1-removebg-preview.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Lotion
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Korean Skincare Products</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
        The 21 Best Korean Skin-Care Products You'll Wish You'd Known About Sooner ; Goodal Green Tangerine Vita C Dark Spot Serum · $24. Amazon.
        </p>
        <button className='text-2xl bg-amber-400 px-2 rounded-md'>Get Touch</button>

      </div>
    </div>
  </div>
</Link>   
        </div>
        </div>
    );
};

export default CardProduct;