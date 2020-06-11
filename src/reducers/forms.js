import { SAVE_FORM } from '../actions/actionCreators';

export default function formState(state = { activeForm: null, forms: [] }, action) {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        forms: [
          ...state.forms,
          action.fields,
        ]
      }
    default:
      return state;
  }
}