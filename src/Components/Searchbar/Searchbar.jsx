/** @format */

import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function Searchbar({ onGetSubmit }) {
  const [searcName, setSearcName] = useState("");

  const getNameChange = (e) => {
    setSearcName(e.currentTarget.value.toLowerCase());
  };

  const getSubmitForm = (e) => {
    e.preventDefault();
    if (searcName.trim() === "") {
      return toast.error("Введите слово для поиска", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    onGetSubmit(searcName);
    setSearcName("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={getSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={searcName}
          onChange={getNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  searcName: PropTypes.string,
};
