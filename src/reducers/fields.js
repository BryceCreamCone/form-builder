import { ADD_FIELD, DELETE_FIELDS, DELETE_FIELD } from '../actions/actionCreators';

export default function fields(state = [], action) {
  switch (action.type) {
    case ADD_FIELD:
      return [
        ...state,
        action.fieldType,
      ];
    case DELETE_FIELD:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    case DELETE_FIELDS:
      return [];
    default:
      return state;
  }
}