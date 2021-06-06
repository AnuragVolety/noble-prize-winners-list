import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Component } from "react";
import { updatePrizeWinnersList } from "../../redux/Prizes/prizes.actions";
import DidYouKnow from "../did-you-know";
import Header from "../header";
import PrizeWinnersTable from "../prize-winners-table";
import Filters from "../filters";
import { Row } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizeWinnersList: [],
      selectedCategories: [],
      year: "",
    };
    this.onCategoryCheckClicked = this.onCategoryCheckClicked.bind(this);
    this.setWinnersList = this.setWinnersList.bind(this);
    this.onYearAdded = this.onYearAdded.bind(this);
  }

  onCategoryCheckClicked(category) {
    if (this.state.selectedCategories.indexOf(category) >= 0) {
      const index = this.state.selectedCategories.indexOf(category);

      this.setState(
        (prevState) => ({
          selectedCategories: [
            ...prevState.selectedCategories.slice(0, index),
            ...prevState.selectedCategories.slice(index + 1),
          ],
        }),
        this.setWinnersList
      );
    } else {
      this.setState(
        (prevState) => ({
          selectedCategories: [category, ...prevState.selectedCategories],
        }),
        this.setWinnersList
      );
    }
  }

  setWinnersList() {
    let prizeWinnersList =
      this.state.prizeWinnersList.length > 0
        ? this.state.prizeWinnersList
        : this.props.prizeWinnersList;

    if (this.state.selectedCategories.length === 0) {
      prizeWinnersList = this.props.prizeWinnersList;
    } else {
      let list = [];
      this.state.selectedCategories.forEach((category) => {
        list = [...list, ...this.props.categories[category]];
      });
      prizeWinnersList = list;
    }
    if (!!this.state.year)
      prizeWinnersList = prizeWinnersList.filter((winner) => {
        return winner.year === this.state.year;
      });

    this.setState({ prizeWinnersList });
  }

  onYearAdded(year) {
    if (!!year) this.setState({ year }, this.setWinnersList);
    else this.setState({ year: "" }, this.setWinnersList);
  }

  componentDidMount() {
    this.props.actions.updatePrizeWinnersList();
  }
  render() {
    const { prizeWinnersList } = this.props;
    const { prizeWinnersList: modifiedList } = this.state;
    return (
      <di>
        <Header />
        <Row
          style={{
            marginLeft: 32,
            marginRight: 32,
            marginTop: 32,
          }}
        >
          <Filters
            onCategoryCheckClicked={this.onCategoryCheckClicked}
            onYearAdded={this.onYearAdded}
          />
          <DidYouKnow />
        </Row>
        <Row
          style={{
            marginLeft: 32,
            marginRight: 32,
            marginTop: 32,
          }}
        >
          <PrizeWinnersTable
            prizeWinnersList={
              modifiedList.length > 0 ? modifiedList : prizeWinnersList
            }
          />
        </Row>
      </di>
    );
  }
}

const mapStateToProps = ({ prizes }) => {
  const { prizeWinnersList, categories } = prizes;
  return {
    prizeWinnersList,
    categories,
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ updatePrizeWinnersList }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
