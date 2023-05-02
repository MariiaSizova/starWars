import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Resources from "./components/Resources/Resources";
import Sidebar from "./components/Sidebar/Sidebar";
import Starships from "./components/Starships/Starships";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" />
          <Route path="/dashboard" />
          <Route path="/movies" />
          <Route path="/resources/people" element={<Resources />} />
          <Route path="/resources/starships" element={<Starships />} />
          <Route path="/resources/planets" />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
