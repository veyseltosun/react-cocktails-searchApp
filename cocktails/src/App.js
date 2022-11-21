import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

// import components
import Navbar from "./components/Navbar";


function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cocktail/:id" element={<SingleCocktail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
