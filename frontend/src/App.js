import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LyricsPage from './components/LyricsPage';
import ScrollToTop from "react-scroll-to-top";
import TestComp from './components/TestComp';
import StartAtTop from './components/StartAtTop';
import SendSomeLove from "./img/SendSomeLove"
import { useState, useEffect } from "react";
import axios from "axios";
import SongCard from './components/SongCard';


function App() {

  const [mainCard, setMainCard] = useState([]);
  const [main, setMain] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/songs/allsongs")
      .then((response) => {
        setMainCard(response.data.songs);
        // setMain(response.data.includes.Asset);
         console.log(response.data.songs)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <StartAtTop />
      <ScrollToTop className="scrollToTop"/>
      <Header />
        <Container className="mainDisplay">                
          <Routes>
            <Route path="/" element={<SongCard songData={mainCard}/>} />
            <Route path="/lyricspage/:id" element={<LyricsPage songData={mainCard}/>} />
            <Route path="/testcomp" element={<TestComp />} />
            <Route path="/sendsomelove" element={<SendSomeLove />} />
          </Routes>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
