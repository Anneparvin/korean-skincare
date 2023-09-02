import React from 'react';

const DetailFace = () => {
    return (
        <div>
           <div class="flow-root bg-black text-yellow-100">
            <h1 className='text-xl font-mono font-bold underline'>DETAIL LIST PRODUCTS</h1>
  <dl class="-my-3 divide-y divide-gray-100 text-sm">
    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-mediumtext-white-900">Title</dt>
      <dd class="text-white-700 sm:col-span-2">Mrs</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-mediumtext-white-900">Name</dt>
      <dd class="text-white-700 sm:col-span-2">Lee Jankuk</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-mediumtext-white-900">Occuputation</dt>
      <dd class="text-white-700 sm:col-span-2">Beautysian</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-mediumtext-white-900">Salary</dt>
      <dd class="text-white-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-mediumtext-white-900">Bio</dt>
      <dd class="text-white-700 sm:col-span-2">
Lee jankuk is a Korean Beautysian.Many Koreans follow multi-step skincare routines, which include cleansing, toning, moisturizing, and various targeted treatments.Korean beauty popularized BB creams and cushion compacts, which combine makeup and skincare benefits. 
      </dd>
    </div>
  </dl>
</div> 
        </div>
    );
};

export default DetailFace;