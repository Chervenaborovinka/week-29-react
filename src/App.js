
import './App.css';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import words from "а здесь что?";
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

function App() {
  return (
    <Router>
      <ErrorComponent/>
      <div className='App'>
        <Header />
    
        <Routes>
          <Route path="/" element={<Table words={words} />} />
          <Route path="/table" element={<Table words={words} />} />
          <Route path="/game" element={<WordCarousel words={words} />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </div >
    </Router >
  );
}

export default App;