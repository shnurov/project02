import React from 'react';
import styles from './NotFound.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        :( <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>Питсы в другом месте...</p>
    </div>
  );
};

export default NotFoundBlock;
