import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const oneContact = await readContacts();
    const addContact = createFakeContact();
    const updateContacts = [...oneContact, addContact];
    await writeContacts(updateContacts);
    console.log(`Sucsefull add new contacts!`);
  } catch (error) {
    console.log(`Error`, error);
  }
};

addOneContact();
