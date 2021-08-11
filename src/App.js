import { useState, useEffect } from "react";
import PhoneBookList from "./components/PhoneBook/PhoneBookList";
import PhoneBookForm from "./components/PhoneBook/PhoneBookForm";
import PhonebookFilter from "./components/PhoneBook/PhoneBookFilter";
import useLocaleStorage from "./components/PhoneBook/useLocaleStorage";
import { nanoid } from "nanoid";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useLocaleStorage("contacts", []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (task) => {
    const searchSameName = contacts
      .map((contact) => contact.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
      <div>Привет</div>;
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: nanoid(),
      };
      setContacts((contacts) => [contact, ...contacts]);
      // alert("Done");
    }
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const showVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = showVisibleContact();

  return (
    <div className={css.div}>
      <PhoneBookForm onSubmit={addContact} />
      <PhonebookFilter value={filter} onChange={changeFilter} />
      <PhoneBookList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
