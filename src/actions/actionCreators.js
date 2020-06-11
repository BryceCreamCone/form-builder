export const ADD_FIELD = 'ADD_FIELD';

export function addField(fieldType) {
  return {
    type: ADD_FIELD,
    fieldType
  }
}