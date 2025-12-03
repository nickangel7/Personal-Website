import { Routes, Route, Outlet } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

function Layout() {
  return (
    <div className='mobile-perfect-zoom min-h-screen bg-background'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <ParticleBackground />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='about' element={<Aboutme />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
