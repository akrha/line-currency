require('dotenv').config();
const currency = require('./lib/currency');
const line = require('./lib/line');
const format = require('date-fns').format;

currency1 = process.env.CURRENCY_1;
currency2 = process.env.CURRENCY_2;

(async () => {
  const c1 = await currency.get(currency1, currency2);
  const c2 = 1/c1;

  const message = `${format(new Date, 'yyyy-MM-dd')} の為替情報です。 \n1 ${currency1} = ${c1.toFixed(4)} ${currency2}\n1 ${currency2} = ${c2.toFixed(4)} ${currency1}`;
  await line.broadcastMessage(message);
})()
.catch(e => {
  console.error(e);
});
