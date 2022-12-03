import Home from './pages/Home';
import RandomPage from './pages/RandomQuotePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote" element={<RandomPage />} />
      </Routes>
    </div>
  );
}

export default App;
