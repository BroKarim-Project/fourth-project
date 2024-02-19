import Navbar from './components/Navbar/navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Pricing from './pages/pricing';
import './style.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;

// Bagusnya aru route, karena kita ingin Navbar dan Footer ada di semua halaman, nnti di dalamnya ada pricing page
//di akhir aja tpi
