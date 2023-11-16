import React from 'react';

function Navi() {
  return (
    <nav className="bg-white/5 p-4">
      <ul className="flex space-x-4 justify-between text-white">
        <li><a href="#" className="hover:text-blue-300 ml-20">Home</a></li>
        <li><a href="#" className="hover:text-blue-300">About</a></li>
        <li><a href="#" className="hover:text-blue-300 mr-20">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navi;
