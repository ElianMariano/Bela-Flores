import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Header />
      {/* <Image url="/" src={Banner} alt="Banner" /> */}
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
