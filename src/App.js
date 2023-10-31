import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { cartClose } from "./store";

import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Pokemon } from './pages/Pokemon';
import { Contato } from './pages/Contato';

function App() {

  const dispatchCart = useDispatch();

  const keydown = (e) => {
    if (e.code === 'Escape') {
      dispatchCart(cartClose());
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keydown, true);
    return () => window.removeEventListener("keydown", keydown, true);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <section className="section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
          <Aside/>
        </section>
        <Footer/>
        <Cart />
      </BrowserRouter>
    </div>
  );
}

export default App;
