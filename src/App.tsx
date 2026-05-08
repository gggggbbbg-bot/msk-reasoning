import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './routes/Home';
import Region from './routes/Region';
import CasePlayer from './routes/CasePlayer';
import Progress from './routes/Progress';
import About from './routes/About';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:regionId" element={<Region />} />
          <Route path="/case/:caseId" element={<CasePlayer />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
