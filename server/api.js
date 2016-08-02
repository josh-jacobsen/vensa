const request = require('superagent');

export const getAllMessagesFromAPI = (callback) => {
  request
  .get('http://vensawebtest.azurewebsites.net/appointment')
  .end(function(err, res){

    console.log(res.body)
  })
}
