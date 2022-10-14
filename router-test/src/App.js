// import RouterTest from "./component/RouterTest";
import Content from "./component/Content";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Product2 from "./component/Product2";
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
