import { useState } from 'react';

export const useGetInitContacts = key => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return [];
    }
  });
  return [state, setState];
};
