import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import CustomerList from './components/Customer/CustomerList';
import CustomerDetail from './components/Customer/CustomerDetail';
import CustomerForm from './components/Customer/CustomerForm';
import QuoteList from './components/Quotes/QuoteList';
import QuoteDetail from './components/Quotes/QuoteDetail';
import QuoteForm from './components/Quotes/QuoteForm';
import PrivateRoute from './components/Common/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
          <Route path="/customer/:id" element={<PrivateRoute><CustomerDetail /></PrivateRoute>} />
          <Route path="/add-customer" element={<PrivateRoute><CustomerForm /></PrivateRoute>} />
          <Route path="/edit-customer/:id" element={<PrivateRoute><CustomerForm /></PrivateRoute>} />
          <Route path="/quotes" element={<PrivateRoute><QuoteList /></PrivateRoute>} />
          <Route path="/quote/:id" element={<PrivateRoute><QuoteDetail /></PrivateRoute>} />
          <Route path="/add-quote" element={<PrivateRoute><QuoteForm /></PrivateRoute>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
