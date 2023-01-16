import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import LyricsPage from './components/LyricsPage';
import ScrollToTop from "react-scroll-to-top";
import TestComp from './components/TestComp';
import StartAtTop from './components/StartAtTop';


function App() {
  return (
    <div>
      <StartAtTop />
      <ScrollToTop className="scrollToTop"/>
      <Header />
        <Container className="mainDisplay">                
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/lyricspage" element={<LyricsPage />} />
            <Route path="/testcomp" element={<TestComp />} />
          </Routes>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
