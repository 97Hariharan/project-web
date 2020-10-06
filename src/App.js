import React from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import Categories from './components/Categories';
import Product from './components/Product';

function App() {
  return (
    <div>
      <TitleBar />
      <Categories  />
      <Product />
    </div>
  );
}

export default App;
