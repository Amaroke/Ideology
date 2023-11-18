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
  const isAuthenticated = Cookies.get('jwtToken') !== undefined;

  const PrivateRoute = ({ element }) => {
    return !isAuthenticated ? (
      element
    ) : (
      <Navigate to="/home" replace />
    );
  };

  return (
    <div className="App">
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
