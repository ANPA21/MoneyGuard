export const checkExistingContacts = (contacts, name) => {
  return contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};
