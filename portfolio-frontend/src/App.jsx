

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
        
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Home />} />

        
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;