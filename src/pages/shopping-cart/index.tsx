import React from 'react';
import CartItem from '../../components/CartItem';
import styles from './styles.module.scss';
import Link from 'next/link';
import HeaderSecondary from '../../components/HeaderSecondary';

const ShoppingCart: React.FC = () => {
  return (
    <section>
      <HeaderSecondary />
      <section className={`container ${styles.cart_container}`}>
        <article className={styles.cart}>
          <h1>Meu carrinho</h1>
          <CartItem />
          <section className={styles.zipCode}>
            <strong>Simule frete e prazo de entrega</strong>
            <article className={styles.zipCode_box}>
              <input
                type='text'
                name='ship-zip'
                placeholder='Digite aqui seu CEP'
                autoComplete='shipping postal-code'
              />
              <button className='secondary'>Calcular</button>
            </article>
          </section>
        </article>
        <article className={styles.shop_resume}>
          <h1>Resumo da compra</h1>
          <section className={styles.cart_resume_container}>
            <article className={styles.cart_resume_card}>
              <span>Subtotal (1 itens)</span>
              <strong>R$ 170,00</strong>
            </article>
            <article className={styles.cart_resume_card}>
              <span>Frete</span>
              <strong>R$ 50,00</strong>
            </article>
            <article className={styles.cart_resume_card}>
              <span>Valor total</span>
              <strong>R$ 230,00</strong>
            </article>
          </section>
          <Link href='/checkout'>
            <button className='primary'>Continuar</button>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default ShoppingCart;
