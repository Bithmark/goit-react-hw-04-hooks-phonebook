import css from "./PhoneBookList.module.css";

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.li} key={id}>
          {name + ": " + number}
          <button className={css.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;
