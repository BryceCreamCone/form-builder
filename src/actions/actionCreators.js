export const ADD_FIELD = 'ADD_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const DELETE_FIELDS = 'DELETE_FIELDS';

export function addField(fieldType) {
  return {
    type: ADD_FIELD,
    fieldType,
  }
}

export function deleteField(id) {
  return {
    type: DELETE_FIELD,
    id,
  }
}

export function deleteFields() {
  return {
    type: DELETE_FIELDS,
  }
}


export const SAVE_FORM = 'SAVE_FORM';
export const SET_ACTIVE_FORM = 'SET_ACTIVE_FORM';

export function saveForm(fields) {
  return {
    type: SAVE_FORM,
    fields,
  }
}

export function setActiveForm(index) {
  return {
    type: SET_ACTIVE_FORM,
    index,
  }
}