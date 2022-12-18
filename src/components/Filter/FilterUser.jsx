// import PropTypes from 'prop-types';
import css from './FilterUser.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contact/selector';
import { filterContact } from 'redux/contact/contactSlice';

const FilterUser = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContact(event.target.value.toLowerCase()));
  };

  return (
    <label className={css.labelFilter}>
      Find contacts by name...
      <input
        type="text"
        name="filter"
        className={css.labelInput}
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default FilterUser;
