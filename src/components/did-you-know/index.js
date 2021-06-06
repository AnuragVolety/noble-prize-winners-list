import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

function DidYouKnow({ multiplePrizeWinnerIds, laureatesListObj }) {
  const multiplePrizeWinners = multiplePrizeWinnerIds.map(
    (id) => laureatesListObj[id]
  );
  return (
    <Card className="col-2" style={{ marginLeft: 48 }}>
      <Card.Body>
        <Card.Title>Did You Know?</Card.Title>
        <Card.Text>
          Only {multiplePrizeWinnerIds.length} people have won Nobel Prize more
          than once. They are the following.
          <hr />
          <ListGroup>
            {multiplePrizeWinners.map((winner) => {
              return (
                <ListGroup.Item>
                  {winner.firstname + " " + winner.surname}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = ({ prizes }) => {
  const { multiplePrizeWinnerIds, laureatesListObj } = prizes;
  return {
    multiplePrizeWinnerIds,
    laureatesListObj,
  };
};

export default connect(mapStateToProps, null)(DidYouKnow);
