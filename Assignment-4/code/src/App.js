import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import PostViewer from './Postviewer/PostViewer';
const App=()=> {
  return (
    <BrowserRouter>
    <div className='wrapper'>
    <Routes>
      <Route path='*' element={<PostViewer/>}/>
      <Route path='/landpage' element={<LandingPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    // <div className="site-container">
    //   <h1>LandingPage</h1>
    //   <LandingPage/>
    //   <h1>post Post_viewer</h1>
    //   <PostViewer/>
    // </div>
  );
}

export default App;
