import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
      };
    case FILTER_CONTACT:
      return {
        ...state,
      };
    case CLEAR_FILTER:
      return {
        ...state,
      };
    case SET_ALERT:
      return {
        ...state,
      };
    case REMOVE_ALERT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default contactReducer;