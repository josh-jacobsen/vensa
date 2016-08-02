
import { POPULATE_MESSAGES } from '../actions/getMessages'


const reducer = (state = {} , action) => {
  switch (action.type) {
    case POPULATE_MESSAGES:
      console.log('Populating messages')
      return action.activities

    default:
      return state
  }
}

export default reducer


  // import { POPULATE_DECISIONS } from '../actions'
  //
  // const initialState = []
  //
  // export default (state = initialState, action) => {
  //   switch (action.type){
  //     case POPULATE_DECISIONS:
  //       return action.locations
  //     default:
  //       return state
  //   }
  // }
