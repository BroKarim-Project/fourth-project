import Navbar from './components/Navbar/navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Pricing from './pages/pricing';
import './style.css'

function App() {
  return (
    <>
      <div className="px-4">
        <Navbar />
        <Pricing />
      </div>
    </>
  );
}

export default App;

// Bagusnya aru route, karena kita ingin Navbar dan Footer ada di semua halaman, nnti di dalamnya ada pricing page
//di akhir aja tpi
