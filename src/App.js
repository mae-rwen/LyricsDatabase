import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import LyricsPage from './components/LyricsPage';

function App() {
  return (
    <div>
      <Header />
        <Container>                
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/lyricspage" element={<LyricsPage />} />
          </Routes>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
