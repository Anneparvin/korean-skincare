import React from 'react';

const Lotion = () => {
    return (
        <div>
         <section className="p-4 lg:p-8 bg-black text-yellow-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/DR8p9GJ/istockphoto-1497577018-170667a.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Skincare Focus</h3>
				<p className="my-6 dark:text-gray-400">Korean beauty places a strong emphasis on skincare as the foundation of beauty. Many Koreans follow multi-step skincare routines, which include cleansing, toning, moisturizing, and various targeted treatments.</p>
				<button type="button" className="self-start bg-amber-500 px-4 rounded-md">See Profile</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://i.ibb.co/sqXjvsG/istockphoto-1277069403-170667a.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Innovative Ingredients</h3>
				<p className="my-6 dark:text-gray-400">Korean skincare products often feature innovative ingredients, such as snail mucin, propolis, rice bran, and ginseng, known for their potential benefits to the skin.</p>
				<button type="button" className="self-start bg-yellow-900 px-4 rounded-md">See Profile</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/JBPKxnV/istockphoto-1317947942-170667a.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Sheet Masks</h3>
				<p className="my-6 dark:text-gray-400">Sheet masks are a staple in Korean skincare. These single-use masks are soaked in serums or essences and are designed to provide intensive hydration and address specific skin concerns.</p>
				<button type="button" className="self-start bg-lime-500 px-4 rounded-md">See Profile</button>
			</div>
		</div>
	</div>
</section>   
        </div>
    );
};

export default Lotion;