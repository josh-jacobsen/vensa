const request = require('superagent');


export const POPULATE_MESSAGES = 'POPULATE_MESSAGES'


export const populateMessages = (payload) => {
  return {
    type: POPULATE_MESSAGES,
    messages: payload,
  }
}

export const fetchMessagesFromAPI = () => {
  return (dispatch) => {
    request
      .get('http://vensawebtest.azurewebsites.net/appointment')
      .end((err, res) => {
        var payload = res.body
        dispatch(populateMessages(payload))
      })
  }
}
