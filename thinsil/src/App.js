import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Product/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< SignUp/>} />
      <Route path="/cart" element={< Cart/>} />
    </Routes>
  );
}

export default App;
