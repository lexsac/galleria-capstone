import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:paintingId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
