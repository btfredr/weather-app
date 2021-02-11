import React from 'react';

const api = {
  key: "49b18f35a651493ef9d1cf84f1ad18d9",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-bar'>
          <input type='text' className='search-box' placeholder='Search...'></input>
        </div>

      </main>
    </div>
  );
}

export default App;
