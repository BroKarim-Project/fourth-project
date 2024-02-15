import Navbar from './components/Navbar/navbar';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <body className="bg-[#181c31] ">
        <Navbar />
      </body>
    </>
  );
}

export default App;

// Bagusnya aru route, karena kita ingin Navbar dan Footer ada di semua halaman, nnti di dalamnya ada pricing page
//di akhir aja tpi