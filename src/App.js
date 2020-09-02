import React from 'react';

import './App.css';
import Sidebar from './component/Sidebar';
import Twittes from './component/Twittes';

function App() {
  return (
    <div className="twitter">
          <Sidebar/>
          <Twittes/>
    </div>
  );
}

export default App;
