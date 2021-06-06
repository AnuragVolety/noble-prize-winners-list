import { UPDATE_PRIZE_WINNERS_LIST } from "./prizes.types";
const axios = require("axios");

export const updatePrizeWinnersList = () => (dispatch) => {
  axios
    .get("http://api.nobelprize.org/v1/prize.json")
    .then((response) => {
      const { prizes: prizeWinnersList } = response.data;
      dispatch({
        type: UPDATE_PRIZE_WINNERS_LIST,
        payload: { prizeWinnersList },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: UPDATE_PRIZE_WINNERS_LIST,
        payload: { prizeWinnersList: [] },
      });
    });
};
