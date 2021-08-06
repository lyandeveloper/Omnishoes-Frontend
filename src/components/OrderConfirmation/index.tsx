import React from 'react';
import styles from './styles.module.scss';

const OrderConfirmation: React.FC = () => {
  return (
    <section className={styles.order_container}>
      <article className={styles.order_confirmation}>
        <h1>Pedido Confirmado</h1>
        <p>Seu pedido foi realizado com sucesso.</p>
      </article>

      <article className={styles.order_content}>
        <h2>Pedido 898654256-01</h2>
        <small>14 de Jul de 2021</small>

        <article className={styles.order_section}>
          <article>
            <h2>Endereço</h2>
            <strong>Principal</strong>
            <p>Avenida Nova Veneza, 0 - Casa</p>
            <p>
              <strong>Bairro: </strong>Nova Veneza
            </p>
            <p>
              <strong>Cidade: </strong>Ubajara
            </p>
            <p>
              <strong>CEP: </strong>62350-000
            </p>
          </article>
          <article>
            <h2>Forma de Pagamento</h2>
            <p>Cartão de crédito</p>
            <p>**** **** **** 2819</p>
          </article>

          <article className={styles.order_resume}>
            <h2>Resumo</h2>
            <div>
              <p>Subtotal</p>
              <p>79,99</p>
            </div>
            <div>
              <p>Frete</p>
              <p>20,00</p>
            </div>
            <div>
              <p>Total</p>
              <p>100,00</p>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};

export default OrderConfirmation;
