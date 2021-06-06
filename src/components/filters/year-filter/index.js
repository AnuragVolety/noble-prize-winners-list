import {
  InputGroup,
  FormControl,
  FormText,
  Row,
  Button,
} from "react-bootstrap";
import { useState } from "react";

function YearFilter({ onYearAdded }) {
  const [year, setYear] = useState("");
  return (
    <Row className="col-12">
      <InputGroup className="col-5">
        <FormText style={{ fontSize: 16, marginRight: 16, fontWeight: "bold" }}>
          Enter a year between 1990 and 2020:
        </FormText>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </InputGroup>
      <Button
        variant="warning"
        onClick={() => {
          onYearAdded(year);
        }}
        disabled={!(!!year && year >= 1990 && year <= 2020)}
      >
        Add Year Filter
      </Button>
      {!!year && year >= 1990 && year <= 2020 && (
        <Button
          variant="danger"
          onClick={() => {
            setYear("");
            onYearAdded("");
          }}
          style={{ marginLeft: 16 }}
        >
          Clear Year Filter
        </Button>
      )}
    </Row>
  );
}

export default YearFilter;
