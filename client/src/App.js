import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import General from './components/pages/general/General'
function App() {
  return (
    <div className="App">
      <Header />
      <General />
      <Footer />
    </div>
  );
}

export default App;
