import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function SearchBar({ songData }) {
  const [results, setResults] = useState([]);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");

  const searchHandler = (e, query) => {
    e.preventDefault();
    const lowerCase = query.toLowerCase();
    console.log(lowerCase);
    const filter = songData.filter((song) => {
      return song.name.toLowerCase().includes(lowerCase);
    });

    setResults(filter);
    setInputText("");
    if (filter.length === 0) return alert("No match");
  };

  return (
    <div>
      <Form
        className="d-flex"
        onSubmit={(e) => {
          searchHandler(e, query);
        }}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            setInputText(e.target.value);
            return setQuery(e.target.value);
          }}
        />
        <Button variant="outline-success" onClick={console.log(results)}>
          Search
        </Button>
      </Form>
    </div>
  );
}
