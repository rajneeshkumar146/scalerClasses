import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Product from './components/Product';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import "./App.css";
import User from './components/User';
import Cart from './components/User';
import PaginationProvider from './components/contexts/PaginationContext';

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
