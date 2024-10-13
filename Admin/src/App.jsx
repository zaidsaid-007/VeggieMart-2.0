import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './pages/Orders/Order';
import List from './Pages/List/List';
import Add from './Pages/Add/Add';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <div className='app-content'>
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Add />} />
            <Route path='/list' element={<List />} />
            <Route path='/orders' element={<Order />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
