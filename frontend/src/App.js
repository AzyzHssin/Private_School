import './App.css';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/404/PageNotFound';
import { Route, Routes, Navigate,useLocation   } from 'react-router-dom'
import { BrowserRouter as Router} from "react-router-dom";
import React from 'react'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path="/*" element={<PageNotFound/>}>  </Route>
      <Route exact path="/" element={<HomePage/>}>  </Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  

    </div>
  )
}

export default App


/*  */
function x (num){
  while(num){
    
  }
}