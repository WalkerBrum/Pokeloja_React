import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Pokemon } from './pages/Pokemon';
import { Contato } from './pages/Contato';

function App() {
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
      </BrowserRouter>
    </div>
  );
}

export default App;
