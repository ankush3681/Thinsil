import './App.css';
import { Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={< Product/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< SignUp/>} />
      <Route path="/cart" element={< Cart/>} />
    </Routes>
    </div>
  );
}

export default App;
