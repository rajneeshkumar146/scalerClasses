import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


// Lazy load the components.
const HomePage = lazy(() => import('./Components/HomePage'));
const ContactPage = lazy(() => import('./Components/ContactPage'));
const AboutPage = lazy(() => import('./Components/AboutPage'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

// Problems That Can Arise in this scenario
// Long Initial Load Time: The initial load time can be significantly high as the browser needs to download a large JavaScript bundle before rendering any content.
// Poor Performance: Large bundle sizes can lead to performance issues, especially on slower networks or less powerful devices.
// Unnecessary Resource Usage: Users might download code for components and features they never interact with, leading to wasted resources.

export default App;
