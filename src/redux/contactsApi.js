import axios from 'axios';

const BASE_URL = 'https://643416c81c5ed06c958ed670.mockapi.io/api';

const getContacts = () => {
  return axios.get(`${BASE_URL}/contacts`);
};

const addContact = contact => {
  return axios.post(`${BASE_URL}/contacts`, contact);
};

const deleteContact = contactId => {
  return axios.delete(`${BASE_URL}/contacts/${contactId}`, {});
};

const contactsApi = { getContacts, addContact, deleteContact };

export default contactsApi;
