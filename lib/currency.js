require('dotenv').config();
const axios = require("axios").default;

const get = async (from, to) => {
  const url = `http://api.currencylayer.com/live?access_key=${process.env.CURRENCYLAYER_ACCESS_KEY}&currencies=${from},${to}`
  const currency = await axios.get(url).then((response) => {
    if (response.status !== 200) {
      throw `Something went wrong. ${response.statusText}`;
    }

    const quotes = response.data.quotes;
    return calculate(quotes['USD' + from], quotes['USD' + to]);
  }).catch((e) => {
    console.error(e)
    return null;
  });
  return currency;
}

const calculate = (from, to) => {
  return to / from;
}

exports.get = get;
