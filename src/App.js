import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MedicineDetailPage from './pages/MedicineDetailPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/medicine/:id" element={<MedicineDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
