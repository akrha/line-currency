require('dotenv').config();
const axios = require("axios").default;
axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.LINE_BEARER_TOKEN}`}

const broadcastMessage = async (message) => {
  const data = JSON.stringify({
    "messages": [
      {
        "type": "text",
        "text": message
      }
    ]
  });
  const config = {
    method: 'post',
    url: 'https://api.line.me/v2/bot/message/broadcast',
    headers: {
      'Authorization': 'Bearer nSzs3ndlVEVTFnUiTW62dRozGbzUJbbe5QnzZQtvkkUfRGVyiANoqhFb7sk7RalKqNAi7aLH6wXrWOpCgseKIpxjDg7kexvBpuQpX03y3MRvKTOyaNrJwCZOjP5amgFxCJkUOvGuHPioxEIkYRnlpwdB04t89/1O/w1cDnyilFU=',
      'Content-Type': 'application/json'
    },
    data : data
  };
  axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

exports.broadcastMessage = broadcastMessage;
