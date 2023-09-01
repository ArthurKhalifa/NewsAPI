import logo from './logo.svg';
import './App.css';

//ROUTER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//IMPORTS COMPONENTS
import { Home } from './components/Pages/Home';
import Navbar from './components/NavBar/Navbar';
import { FetchData } from './components/Fetch/FetchData';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home cat="Home"/>} />
          <Route path='/business' element={<FetchData cat="Business" />} />
          <Route path='/entertainment' element={<FetchData cat="Entertainment" />} />
          <Route path='/health' element={<FetchData cat="Health" />} />
          <Route path='/science' element={<FetchData cat="Science" />} />
          <Route path='/sports' element={<FetchData cat="Sports" />} />
          <Route path='/technology' element={<FetchData cat="Technology" />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
