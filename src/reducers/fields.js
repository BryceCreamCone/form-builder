import { ADD_FIELD, DELETE_FIELDS } from '../actions/actionCreators';

export default function fields(state = [], action) {
  switch (action.type) {
    case ADD_FIELD:
      return [
        ...state,
        action.fieldType,
      ];
    case DELETE_FIELDS:
      return [];
    default:
      return state;
  }
}