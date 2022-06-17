import React from 'react';

import Home from './components/home/Home';

const $appStyle = `
  bg-customGrey
`;

function App() {
  return (
    <div className={$appStyle}>
      <Home />
    </div>
  );
}

export default App;
