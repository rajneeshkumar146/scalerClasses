import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Partner from "./pages/Partner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import store from "./redux/store"
import { Provider } from 'react-redux';

function App() {

  return (

    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            <Route path="/partner" element={<ProtectedRoute><Partner /></ProtectedRoute>} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );

}

export default App;
