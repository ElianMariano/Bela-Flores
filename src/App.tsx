import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <>
      <Header />

      {/* <Image url="/" src={Banner} alt="Banner" /> */}

      <Carousel />

      <ProductSlider />

      <ProductSlider />

      <Footer />
    </>
  );
}

export default App;
