import { connect } from "react-redux";
import { Col, FormText, InputGroup, Row } from "react-bootstrap";

function CategoryFilter({ categoryList, onCategoryCheckClicked }) {
  return (
    <Col className="col-12">
      <Row className="col-12">
        <FormText
          style={{ fontSize: 16, marginBottom: 16, fontWeight: "bold" }}
        >
          Category:
        </FormText>
        {categoryList.map((category) => (
          <InputGroup
            className="mb-3"
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#ffe082",
              marginLeft: 16,
              borderRadius: " 50px",
              position: "relative",
              alignItems: "center",
            }}
            onChange={() => onCategoryCheckClicked(category)}
          >
            <InputGroup.Checkbox />
            <FormText style={{ fontSize: 16, marginLeft: 16 }}>
              {category.charAt(0).toUpperCase() +
                category.substr(1).toLowerCase()}
            </FormText>
          </InputGroup>
        ))}
      </Row>
    </Col>
  );
}

const mapStateToProps = ({ prizes }) => {
  const { categories } = prizes;
  const categoryList = Object.keys(categories);
  return { categoryList };
};

export default connect(mapStateToProps, null)(CategoryFilter);
