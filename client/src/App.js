import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Username from './components/Username';
import Reset from './components/Reset';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/" element={<Username />} />
                  <Route path="/reset" element={<Reset />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/recovery" element={<Recovery />} />
                  <Route path="/password" element={<Password />} />
                  <Route path="/pagenotfound" element={<PageNotFound />} />
              </Routes>
              
     </Router>
    </>
  )
}

export default App