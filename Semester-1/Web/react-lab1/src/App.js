import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navigation from './navigation';
import Pages from './pages';
import NotFoundPage from './notFoundPage';
import About from './About';
import ContactPage from './ContactPage';


function App () {
  return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>

          <div className="page-container">
            <Routes>
              <Route path='/' element={<Pages />} >
                <Route path='/page/:pageId' element={<Pages />} />
              </Route>
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
  );
}

export default App;
