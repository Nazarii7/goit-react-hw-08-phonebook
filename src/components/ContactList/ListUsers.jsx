import React from 'react';
import css from './ListUsers.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contact/operation';
import { getContacts, getFilter } from 'redux/contact/selector';

const ContactList = ({ id }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsArr = () => {
    if (!filter || filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const visibilityContacts = contactsArr();
  console.log(visibilityContacts);

  return (
    <ul className={css.item}>
      {visibilityContacts.map(({ id, name, number }) => {
        return (
          <li className={css.listItem} key={id}>
            <span>{name} : </span>
            <span>{number}</span>
            <button
              className={css.buttonItem}
              type="button"
              onClick={() => dispatch(removeContacts(id))}
              aria-label="delete"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
