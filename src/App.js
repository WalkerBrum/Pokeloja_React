import './App.css';

import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
