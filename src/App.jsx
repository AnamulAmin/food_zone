import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-r from-pink-200 via-orange-100 to-cyan-100 ">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
