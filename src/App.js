import React, { useState } from 'react';
import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function App() {

  const [sideBar, setSideBar] = useState(true);


  return (
    <div>
      <Navbar setSideBar={setSideBar}  />
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar}/>} />
        <Route path='/Video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
