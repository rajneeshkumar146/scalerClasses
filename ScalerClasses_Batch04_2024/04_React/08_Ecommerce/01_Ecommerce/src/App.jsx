import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import Product from './components/Product';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import "./App.css";
import User from './pages/User';
import Cart from './pages/Cart';
import PaginationProvider from './contexts/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </PaginationProvider>
  );
}

export default App
