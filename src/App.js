import React from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product'
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
          <Navbar/>
          <Product/>
      </div>
    </AppProvider>
  );
}

export default App;