import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";

export default function LyricsPage({songData}) {
  const { id } = useParams();
  const songLyrics = songData.find((song) => song._id === id);
  console.log(songLyrics);

  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1>{songLyrics.title}</h1>
          <div style={{ whiteSpace: "pre-line" }}> {songLyrics.lyrics} </div>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Img src={songLyrics.artwork} alt="Card image" />
            <Card.Body>
              <Card.Text>{songLyrics.artist}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}