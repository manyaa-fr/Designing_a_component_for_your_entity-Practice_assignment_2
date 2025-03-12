import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductCard from './components/productcard';



function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}

export default App;
