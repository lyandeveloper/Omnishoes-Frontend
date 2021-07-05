import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" passHref>
          <a className={styles.logo}>OMNIShoes</a>
        </Link>
        <ul>
          <li className={styles.shop_cart}>
            <button type='button'>
              <ShoppingCart />
            </button>
          </li>
          <form method='GET' action='/search' className={styles.form}>
            <input type='text' name='product' placeholder='Pesquisar' />
            <button type='submit'>
              <Search />
            </button>
          </form>
        </ul>
      </nav>
    </header>
  );
}

export default Header;