import React from 'react';

function Navi() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-around text-white">
        <li><a href="#" className="hover:text-blue-300">Home</a></li>
        <li><a href="#" className="hover:text-blue-300">About</a></li>
        <li><a href="#" className="hover:text-blue-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navi;

