// import { GET_COMMUNITY_REQUEST} from '../constants/Page'
// import { GET_COMMUNITY_SUCCESS} from '../constants/Page'

// const initialState = {
//   response : null
// }

// export default function page(state = initialState, action) {

//   switch (action.type) {
//     case GET_COMMUNITY_SUCCESS:
//     return { ...response:action.payload }

//     default:
//     return response;

//   }
// }

import { SET_YEAR } from '../constants/Page'

const initialState = {
  year: 2016,
  photos: []
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }

    default:
      return state;
  }

}
