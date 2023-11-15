import React from 'react';

function Navi() {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4 justify-around text-white">
        <li><a href="#" className="hover:text-blue-300"></a></li>
        <li><a href="#" className="hover:text-blue-300">Join</a></li>
        <li><a href="#" className="hover:text-blue-300"></a></li>
      </ul>
    </nav>
  );
}

export default Navi;

