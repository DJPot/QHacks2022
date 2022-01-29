import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Footer,
  Home,
  About,
  Debate,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/debate" element={<Debate/>} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
  
);

ServiceWorker.unregister();
