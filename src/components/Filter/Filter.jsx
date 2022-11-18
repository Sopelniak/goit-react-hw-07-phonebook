import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from 'redux/users/filterSlice';
import { selectFilter } from 'redux/users/contacts-selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        <span>Find contacts by name</span>

        <input
          onChange={e => dispatch(filterUsers(e.target.value))}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
}

export { Filter };
