import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cookies from 'js-cookie';

function App() {

  const PrivateRoute = ({ element }) => {
    return Cookies.get('jwtToken') === undefined ? (
      element
    ) : (
      <Navigate to="/home" replace />
    );
  };

  return (
    <div className="App">
      <Router basename='/Ideology'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<PrivateRoute element={<Login />} />}
          />
          <Route
            path="/register"
            element={<PrivateRoute element={<Register />} />}
          />
          <Route
            path="/forgot-password"
            element={<PrivateRoute element={<ForgotPassword />} />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
