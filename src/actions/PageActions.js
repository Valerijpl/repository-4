// import { GET_COMMUNITY_REQUEST } from '../constants/Page'
// import { GET_COMMUNITY_SUCCESS } from '../constants/Page'

// export function getCommunityRequest(){
// return {
//   type: GET_COMMUNITY_SUCCESS,
//   payload: response
// }  
// }

// fetch(url)
// .then(data=>data.json)
// .then(response=>{console.log(response)})



import { SET_YEAR } from '../constants/Page'

export function setYear(year) {

  return {
    type: SET_YEAR,
    payload: year
  }

}

