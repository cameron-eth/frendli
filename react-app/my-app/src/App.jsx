import { useState } from 'react';
import Navi from './nav';
import Body from './body';
import Hero from './hero'; // Assuming you have a Hero component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      {/* Include the navigation component */}
      <Navi />

      {/* Include the Body component */}
      <Body />

      {/* Include the Hero component */}
      <Hero />
    </div>
  );
}

export default App;
