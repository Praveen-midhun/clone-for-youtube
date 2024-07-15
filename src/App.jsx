import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'; // Adjust the import path as necessary
import Video from './Pages/Video/Video'; // Adjust the import path as necessary


const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <Router basename="/Clone-for-youtube"> {/* Add basename here */}
      <div>
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;