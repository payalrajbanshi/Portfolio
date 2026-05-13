// import Navbar from "./components/layout/Navbar";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;

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
          {/* Main page */}
          <Route path="/" element={<Home />} />

          {/* ✅ Project details page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;