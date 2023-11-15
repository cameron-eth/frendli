import React from 'react';

function Body() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
          <h1 className="text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-500 via-yellow-400 to-blue-300 text-transparent bg-clip-text">
          Frendly
        </h1>
        
            
            <p className="mt-4 text-xl text-white">Share your plans, find things to do, invite others, connect in the environments you love. Using Technology to leverage connection</p>
            <a href="#" className=" mt-8 inline-block rounded-md border border-transparent  bg-white/5 px-8 py-3 text-center font-medium text-yellow-400 hover:bg-indigo-100">
            Find Experiences Now
          </a>
          </div>
          <div>
          <div className="mt-10 bg-white/5 border-2 mt-40 rounded-lg shadow-lg p-3">

            <div id='hyperlink' className=' mb-10 flex justify-around m-2 '>
            <li className='text-white text-8xl cursor-default list-none hover:text-red-500 '>DJ Sets</li>
            <li className='text-white text-5xl cursor-default list-none  hover:text-blue-500 mr-2 '>Restraunts & Shops</li>
            <li className='text-white text-5xl cursor-default mr-2 list-none  hover:text-green-500 '> + </li>
            <li className='text-white text-3xl cursor-default list-none  hover:text-yellow-500 '>Outdoor Activities</li>
            <li className='text-white text-8xl cursor-default list-none  hover:text-green-500 ml-2 mt-2 '>Live Music</li>
            
            </div>

            <div id='hyperlink' className=' mb-10 flex justify-around '>
            <li className='text-white sm:text-8xl cursor-default list-none hover:text-amber-800 '>Black Owned</li>
            <li className='text-white text-3xl cursor-default list-none mt-1 '> <span className='hover:text-yellow-600 mr-2'>L</span><span className='hover:text-blue-300'>G</span> <span className='hover:text-pink-400'>B</span> <span className='hover:text-yellow-500'>T</span> <span className='hover:text-green-500'> Q</span> <span className='hover:text-red-500'>+</span><span></span></li>

            </div>

              <p className="text-2xl ml-3 text-blue-200">This Week's Happenings</p>

              <section className="mt-5">
                <ul className="space-y-4">
                  <li className="flex items-center justify-between bg-white/5 p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                    <div>
                      <h3 className="text-lg text-pink-500">Fred Again, DJ Set @ Butterfly</h3>
                      <p className="text-gray-400">Friends: Alex, Jamie, Izzy</p>
                    </div>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Confirm</button>
                  </li>
                  <li className="flex items-center justify-between bg-white/5 p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500">Day Party @ Sotto Sotto</h3>
                      <p className="text-gray-400">Friends: Marco, Eva</p>
                    </div>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Confirm</button>
                  </li>
                  <li className="flex items-center justify-between bg-white/5 p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                    <div>
                      <h3 className="text-lg text-blue-500">Da Andrea, 5 Course Tasting Party</h3>
                      <p className="text-gray-400">Friends: Alex, Jamie, Izzy</p>
                    </div>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Confirm</button>
                  </li>
                </ul>
              </section>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
