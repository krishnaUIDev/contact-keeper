import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
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

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        email: "krishna@gmail.com",
        name: "krishna",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 2,
        email: "krishnaKK@gmail.com",
        name: "krishnaKK",
        phone: "111-131-1111",
        type: "personal",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // filter contact

  // clear filter contacts
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        current: state.current,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
