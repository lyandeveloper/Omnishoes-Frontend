import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import styles from './styles.module.scss';

const CartItem: React.FC = () => {
  return (
    <section className={styles.cart_card}>
      <article className={styles.product_info}>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg'
          alt=''
        />
        <article className={styles.product_content}>
          <h2>AFROJACK Men's</h2>
          <IconButton size='small'>
            <Delete />
          </IconButton>
        </article>
      </article>
      <article className={styles.cart_amount_price}>
        <article>
          <span>Quantidade:</span>

          <button>-</button>
          <span>1</span>
          <button>+</button>
        </article>

        <article>R$ 170,00</article>
      </article>
    </section>
  );
};

export default CartItem;
