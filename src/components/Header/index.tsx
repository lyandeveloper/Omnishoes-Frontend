import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Link href="/" passHref>
          <a className={styles.logo}>OMNISHOES</a>
        </Link>
          <form method='GET' action='/search' className={styles.form}>
            <input type='text' name='product' placeholder='O que você está procurando?' />
            <button type='submit'>
              <Search color="secondary"/>
            </button>
          </form>
        <ul>
          <li className={styles.shop_cart}>
            <button type='button'>
              <ShoppingCart color="primary"/>
              <span>0</span>
            </button>
          </li>
        </ul>
      </nav>
      <nav className={`container ${styles.categories}`}>
        <ul>
          <li><a href="/categories?=calcados">Calçados</a></li>
          <li><a href="/categories?=roupas">Roupas</a></li>
          <li><a href="/categories?=acessorios">Acessorios</a></li>
          <li><a href="/categories?=beleza">Beleza</a></li>
          <li><a href="/categories?=marcas">Marcas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;