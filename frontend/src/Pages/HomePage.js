import React from "react";
import { useLocation   } from 'react-router-dom'


const HomePage=()=> {
  const location = useLocation();
    return (
      <div className="App">
        
  Home Page    </div>
    );
  }

  export default HomePage;