import styles from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

const Filter = ({ onChange }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <label className={styles.label}>
      <span className={styles.title}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
