import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const HeaderSecondary: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className='container'>
        <Link href='/' passHref>
          <a className={styles.logo}>OMNISHOES</a>
        </Link>
        <form method='GET' action='/search' className={styles.form}>
          <input
            type='text'
            name='product'
            placeholder='O que você está procurando?'
          />
          <button type='submit'>
            <Search color='secondary' />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default HeaderSecondary;
