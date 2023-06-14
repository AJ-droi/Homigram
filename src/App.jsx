// Libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
// Components/Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
// ASsets
import "./App.css";

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router> */}

      {/* Alternate Routing */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

function HomeLayout() {
  return (
    <div className="bg-color-primary-dark text-color-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
