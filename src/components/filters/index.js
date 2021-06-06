import { Container, Row } from "react-bootstrap";
import CategoryFilter from "./category-filter";
import YearFilter from "./year-filter";

function Filters({ onCategoryCheckClicked, onYearAdded }) {
  return (
    <Container>
      <Row>
        <CategoryFilter onCategoryCheckClicked={onCategoryCheckClicked} />
        <YearFilter onYearAdded={onYearAdded} />
      </Row>
    </Container>
  );
}

export default Filters;
