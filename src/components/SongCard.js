import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function SongCard({ songData }) {

  
  return (
    <div className="cardmain">
      {songData.map((m) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={m.artwork} className="cardImage" />
            <Card.Body>
              <Card.Title>{`${m.artist} - ${m.title}`}</Card.Title>
              <Card.Text className="description"></Card.Text>
              <Nav className="nav gap-3 ">
                <Link to={`/lyricspage/${m._id}`}><Button variant="dark">See the lyrics</Button></Link>
              </Nav>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
