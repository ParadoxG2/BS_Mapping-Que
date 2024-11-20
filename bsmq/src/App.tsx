import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// routs
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
