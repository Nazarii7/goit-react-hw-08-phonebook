import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/operation';
import { getIsLoading, getError } from 'redux/contact/selector';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FormUser from 'components/FormUser/FormUser';
import FilterUser from 'components/Filter/FilterUser';
import ContactList from 'components/ContactList/ListUsers';
import css from './contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>It's your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <FormUser />
      <h3 className={css.contactTitle}>Contacts</h3>
      <FilterUser />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </HelmetProvider>
  );
}
