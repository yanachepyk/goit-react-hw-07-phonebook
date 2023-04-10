import { Button, ContactEl } from 'components/Shared.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactEl>
      {name}: {number} 
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ContactEl>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
