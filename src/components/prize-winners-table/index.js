import { Table } from "react-bootstrap";

function getLaureatesName(prize) {
  const { laureates } = prize;
  if (!!laureates) {
    if (laureates.length <= 2)
      return laureates
        .map((laureate) => {
          let name = laureate.firstname;
          if (!!laureate.surname) name += " " + laureate.surname;
          return name;
        })
        .join(" & ");
    else {
      let names = laureates
        .slice(0, -1)
        .map((laureate) => {
          let name = laureate.firstname;
          if (!!laureate.surname) name += " " + laureate.surname;
          return name;
        })
        .join(", ");
      const lastName =
        laureates.slice(-1)[0].firstname + " " + laureates.slice(-1)[0].surname;
      return names + " & " + lastName;
    }
  }
  return prize.overallMotivation;
}

function PrizeWinnersTable({ prizeWinnersList }) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Year</th>
          <th>Category</th>
          <th>Laureate(s)</th>
          <th>Motivation</th>
        </tr>
      </thead>
      <tbody>
        {prizeWinnersList.map((prize, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{prize.year}</td>
            <td>
              {prize.category.charAt(0).toUpperCase() +
                prize.category.substr(1).toLowerCase()}
            </td>
            <td>{getLaureatesName(prize)}</td>
            <td>{!!prize.laureates ? prize.laureates[0].motivation : "NA"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PrizeWinnersTable;
