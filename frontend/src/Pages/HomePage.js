import React from "react";
import { useLocation   } from 'react-router-dom'
import Hero from "../Components/Hero";

const HomePage=()=> {
  const location = useLocation();
    return (
   
      <div id="HomePage">
      <Hero/>
      </div>
      
    );
  }

  export default HomePage;