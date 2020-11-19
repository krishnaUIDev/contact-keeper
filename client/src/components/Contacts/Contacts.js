import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4> Please add contacts ...</h4>;
  }
  let finalVal;
  filtered !== null ? (finalVal = filtered) : (finalVal = contacts);
  return (
    <Fragment>
      <TransitionGroup>
        {finalVal &&
          finalVal.map((a) => (
            <CSSTransition key={a.id} timeout={500} classNames="item">
              <ContactItems contact={a} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
