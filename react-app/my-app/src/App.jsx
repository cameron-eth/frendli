import { useState } from 'react';
import Navi from './nav';
import Body from './body';
import Contact from './contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      {/* Include the navigation component */}

      <Navi />
      

      {/* Include the Body component */}
      <Body />

      {/* Include the Hero component */}
      <Contact/>
    </div>
  );
}

export default App;
