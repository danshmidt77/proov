import * as types from './../actions/actionTypes';
export default function industryRedcuer(state = [], action){
  switch (action.type) {
    case types.FETCH_INDUSTRY:
    return action.industries;

default:
  return state;
  }
}
