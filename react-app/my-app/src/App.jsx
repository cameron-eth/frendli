import { useState, useEffect } from 'react';
import Navi from './nav';
import Body from './body';
import Contact from './contact';
import SubHero from './subhero';

function App() {
  const url = 'https://randomuser.me/api'
  const [personData, setPersonData] = useState([{}]);

  return (
    <div className="bg-black">
      <Navi />
      

      {/* Include the Body component */}
      <Body />



      {/* Include the SubHero component */}
      <SubHero />

    
    </div>
  );
}

export default App;
