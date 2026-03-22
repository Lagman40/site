import React from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer"; // Импортируем компонент подвала

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main>
        {/* Здесь может быть баннер или приветствие */}
        <Products />
      </main>
      <Footer /> {/* Подвал будет отображаться после всего контента */}
    </div>
  );
}

export default App;


