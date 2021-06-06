import { UPDATE_PRIZE_WINNERS_LIST } from "./prizes.types";

const InitialState = {
  prizeWinnersList: [],
  multiplePrizeWinnerIds: [],
  laureatesListObj: {},
  categories: {},
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_PRIZE_WINNERS_LIST: {
      const { prizeWinnersList } = action.payload,
        categories = getCategories(prizeWinnersList),
        { laureatesListObj, multiplePrizeWinnerIds } =
          getLaureatesList(prizeWinnersList);
      return {
        ...state,
        prizeWinnersList,
        multiplePrizeWinnerIds,
        laureatesListObj,
        categories,
      };
    }
    default:
      return state;
  }
};

export default reducer;

function getCategories(prizeWinnersList) {
  let categories = {};
  prizeWinnersList.forEach((prize) => {
    if (!categories.hasOwnProperty(`${prize.category}`))
      categories[`${prize.category}`] = [
        {
          year: prize.year,
          laureates: prize.laureates,
          category: prize.category,
        },
      ];
    else
      categories[`${prize.category}`].push({
        year: prize.year,
        laureates: prize.laureates,
        category: prize.category,
      });
  });

  return categories;
}

function getLaureatesList(prizeWinnersList) {
  let laureatesListObj = {},
    multiplePrizeWinnerIds = [];
  prizeWinnersList.forEach((prize) => {
    const { laureates } = prize;
    if (!!laureates) {
      laureates.forEach((laureate) => {
        if (!laureatesListObj.hasOwnProperty(`${laureate.id}`))
          laureatesListObj[`${laureate.id}`] = {
            firstname: laureate.firstname,
            surname: laureate.surname,
            prizes: 1,
          };
        else {
          laureatesListObj[`${laureate.id}`].prizes++;
          if (!!laureate.firstname && !!laureate.surname)
            // There are organizations (not people) who have got multiple prizes
            multiplePrizeWinnerIds.push(laureate.id);
        }
      });
    }
  });
  return { laureatesListObj, multiplePrizeWinnerIds };
}
