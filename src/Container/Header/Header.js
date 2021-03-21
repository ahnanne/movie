import React from 'react';
import styles from './Header.module.scss';

/* -------------------------------------------------------------------------- */

export default function Header({ link, children }) {
  return (
    <h1 className={styles['h1']}>
      <a href={link}>{children}</a>
    </h1>
  );
}
