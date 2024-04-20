
import './App.css';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import words from "./data/words";
import Content from './Content/Content';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
    
        <Routes>
          <Route path="/" element={<Table words={words} />} />
          <Route path="/table" element={<Table words={words} />} />
          <Route path="/game" element={<WordCarousel words={words} />} />
          <Route path="*" element={<ErrorComponent />} />
          <Route path="/text" element={<Content />} />
        </Routes>
      </div >
    </Router >
  );
}

export default App;