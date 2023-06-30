import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

// Protected Route will ensure that the dashboard cannot be accessed until you have done successful authorization
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Route>
        
      </Routes>
    </Router>
    </>
  );
};

export default App;
