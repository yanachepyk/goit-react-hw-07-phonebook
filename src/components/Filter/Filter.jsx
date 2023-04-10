import { Input, Label } from 'components/Shared.styled';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setContactsFilter(event.target.value.toLowerCase()));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleFilter} />
    </Label>
  );
};

export default Filter;
