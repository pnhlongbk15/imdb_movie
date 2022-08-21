import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// component
import Header from "./component/main/header/Header";
import Footer from "./component/main/footer/Footer";
import Switch from "./config/Switch";

// style
import './App.scss';
import "swiper/css";
import './assets/boxicons-2.0.7/css/boxicons.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={
            <>
              <Header/>
              <Switch/>
              <Footer/>
            </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
