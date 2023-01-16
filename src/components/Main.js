import SongCard from "./SongCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {

  const [mainCard, setMainCard] = useState([]);
  const [main, setMain] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/songs/allsongs")
      .then((response) => {
        setMainCard(response.data);
        // setMain(response.data.includes.Asset);
         console.log(response.data.songs)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      Main
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  );
}
