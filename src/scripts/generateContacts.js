import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updateContacts = [...contacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(`Sucsefull add  ${number} new contacts!`);
  } catch (error) {
    console.log(`Error addContacts`, error);
  }
};

generateContacts(5);
