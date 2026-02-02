import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RadicalPage, CommonCharPage } from './pages/Phase1';
import { Level1Page, Level2Page } from './pages/Phase2';
import { DoublePage, QuadPage, RhythmPage } from './pages/Phase3';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Phase 1 */}
        <Route path="/phase1/radical" element={<RadicalPage />} />
        <Route path="/phase1/common" element={<CommonCharPage />} />

        {/* Phase 2 */}
        <Route path="/phase2/level1" element={<Level1Page />} />
        <Route path="/phase2/level2" element={<Level2Page />} />

        {/* Phase 3 */}
        <Route path="/phase3/double" element={<DoublePage />} />
        <Route path="/phase3/quad" element={<QuadPage />} />
        <Route path="/phase3/rhythm" element={<RhythmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
