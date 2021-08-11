import React from "react";

import css from "./PhoneBookFilter.module.css";

const PhonebookFilter = ({ value, onChange }) => {
  return (
    <div>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhonebookFilter;
