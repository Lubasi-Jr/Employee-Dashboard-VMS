import { useState } from "react";
import SideBar from "./components/SideBar";
import Visitors from "./components/Visitors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import VisitDetails from "./components/VisitDetails";

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visitor" element={<Visitors />} />
          <Route path="/visits/:visitId" element={<VisitDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
