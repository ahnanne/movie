import React from 'react';
import styles from './SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/* -----------------------Compound Component------------------------- */

export default function SearchForm({ children }) {
  return (
    <>
    <div className={styles['container']}>
      <div className="search-form">
      {/* <form> */}
      {/* <form action={movieUrl} method="get" className="search-form"> */}
        {children}
      </div>
      {/* </form> */}
    </div>
    </>
  );
}

SearchForm.Input = function InputComponent({ id, value, onChange, onKeyUp }) {
  return (
    <input
      type="text"
      name={id} // searchMovie
      value={value}
      id={id} // searchMovie
      className={styles['search']}
      placeholder="영화 제목으로 검색"
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

SearchForm.Button = function ButtonComponent({ onClick }) {
  return (
    <button
      className={styles['searchBtn']}
      // type="submit"
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
}
