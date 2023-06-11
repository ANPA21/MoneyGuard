export const checkExistingContacts = (state, name) => {
  return state.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};
