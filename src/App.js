
import './App.css';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import WordList from './components/WordList/WordList';

function App() {
  return (
    <Router>
      <ErrorComponent/>
      <div className='App'>
        <Header />
    
        <Routes>
          <Route path="/" element={<Table/>} />
          <Route path="/table" element={<Table/>} />
          <Route path="/game" element={<WordCarousel/>} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <WordList/>
      </div >
    </Router >
  );
}

export default App;