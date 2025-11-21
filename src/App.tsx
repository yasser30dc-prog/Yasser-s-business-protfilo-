import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Viraltify from './pages/Viraltify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viraltify" element={<Viraltify />} />
      </Routes>
    </Router>
  );
}

export default App;
