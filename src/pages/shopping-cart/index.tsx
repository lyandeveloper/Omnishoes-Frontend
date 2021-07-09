import React from 'react';
import CartItem from '../../components/CartItem';
import styles from './styles.module.scss';

const ShoppingCart: React.FC = () => {
  return (
    <section className={`container ${styles.cart_container}`}>
      <article className={styles.cart}>
        <h1>Meu carrinho</h1>
        <CartItem />
        <section className={styles.zipCode}>
          <strong>Simule frete e prazo de entrega</strong>
          <article className={styles.zipCode_box}>
            <input type='text' placeholder='Digite aqui seu CEP' />
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
        <button className='primary'>Continuar</button>
      </article>
    </section>
  );
};

export default ShoppingCart;
