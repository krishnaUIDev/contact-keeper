import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts && contacts.map((a) => <ContactItems contact={a} key={a.id} />)}
    </Fragment>
  );
};

export default Contacts;
