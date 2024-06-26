import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from './components/Body/Restaurants';
import Footer from './components/Footer/Footer';
import './App.css';

const AppComponent=()=>{
  return(
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);