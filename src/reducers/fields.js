import { ADD_FIELD } from '../actions/actionCreators';

export default function fields(state = [], action) {
  switch (action.type) {
    case ADD_FIELD:
      return [
        ...state,
        action.fieldType,
      ];
    default:
      return state;
  }
}