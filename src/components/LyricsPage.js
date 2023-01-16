import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function LyricsPage(songData) {
  const title = "You want it darker";
  const lyrics =
    "If you are the dealer, I'm out of the game \n If you are the healer, it means im broken and lame \n If thine is the glory, then mine must be the shame \n You want it darker \n We kill the flame \n Magnified, sanctified \n Be the holy name \n Vilified, crucified \n In the human frame \n A million candles burning \n For the help that never came \n You want it darker \n Hineni, hineni \n I'm ready, my Lord \n There's a lover in the story \n But the story's still the same \n There's a lullaby for suffering \n And a paradox to blame \n But it's written in the scriptures \n And it's not some idol claim \n You want it darker \n We kill the flame \n They're lining up to prisoners \n And the guards are taking aim \n I struggle with some demons \n They were middle class and tame \n I didn't know I had permission \n To murder and to maim \n  You want it darker \n Hineni, hineni \n I'm ready, my Lord \n Magnified, sanctified \n Be the holy name \n Vilified, crucified \n In the human frame \n A million candles burning \n For the love that never came \n You want it darker \n We kill the flame \n If you are the dealer, let me out of the game \n If you are the healer, I'm broken and lame \n If thine is the glory, mine must be the shame \n You want it darker \n Hineni, hineni \n Hineni, hineni \n I'm ready, my Lord";
  const artist = "Leonard Cohen";
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/en/8/84/Leonard_Cohen_You_Want_It_Darker.jpg";
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1>{title}</h1>
          <div style={{ whiteSpace: "pre-line" }}> {lyrics} </div>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Img src={imageUrl} alt="Card image" />
            <Card.Body>
              <Card.Text>{artist}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}