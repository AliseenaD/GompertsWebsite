import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Research from './pages/Research';
import Team from './pages/Team';
import Join from './pages/Join';
import Publications from './pages/Publications';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/research' element={<Research />} />
        <Route path='/team' element={<Team />} />
        <Route path='/join' element={<Join />} />
        <Route path='/publications' element={<Publications />} />
      </Routes>
    </HashRouter>
  );
}

export default App
