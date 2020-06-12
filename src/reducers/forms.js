import { SAVE_FORM, SET_ACTIVE_FORM } from '../actions/actionCreators';

export default function formState(state = { activeForm: null, forms: [] }, action) {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        forms: [
          ...state.forms,
          action.fields,
        ]
      };
    case SET_ACTIVE_FORM:
      return {
        ...state,
        activeForm: action.index,
      };
    default:
      return state;
  }
}