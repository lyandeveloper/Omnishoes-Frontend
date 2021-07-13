import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

const PaymentForm: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };
  return (
    <section className={styles.payment_section}>
      <section>
        <article className={styles.payments}>
          <h1 className={styles.title}>Pagamento</h1>
          <h2 className={styles.subtitle}>Qual tipo de entrega você deseja?</h2>
          <article className={styles.delivery}>
            <h3>Escolha seu frete</h3>
            <article className={styles.delivery_options}>
              <FormControl>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={value}
                  onChange={handleRadioChange}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <FormControlLabel
                    value='Normal'
                    control={<Radio />}
                    label='Normal'
                  />
                </RadioGroup>
              </FormControl>
              <span>R$ 20,00</span>
              <span>Chega até dia 10 de agosto</span>
            </article>

            <article className={styles.delivery_options}>
              <FormControl>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={value}
                  onChange={handleRadioChange}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <FormControlLabel
                    value='Expresso'
                    control={<Radio />}
                    label='Expresso'
                  />
                </RadioGroup>
              </FormControl>
              <span>R$ 50,00</span>
              <span>Chega até dia 5 de agosto</span>
            </article>
          </article>

          <article className={styles.card_form}>
            <h1 className={styles.subtitle}>Pague com cartão de crédito</h1>
            <TextField
              id='outlined-basic'
              label='Número do Cartão'
              required
              variant='outlined'
              name='cardnumber'
              autoComplete='cc-number'
              className={styles.input}
            />
            <TextField
              id='outlined-basic'
              label='Nome do titular (como está gravado no Cartão)'
              required
              variant='outlined'
              name='ccname'
              autoComplete='cc-name'
              className={styles.input}
            />

            <div className={styles.expire_card}>
              <label htmlFor=''>Data de Validade</label>
              <div className={styles.expire_card_inputs}>
                <select className={styles.select}>
                  <option value='' disabled selected>
                    Mês
                  </option>
                </select>
                <select className={styles.select}>
                  <option value='' disabled selected>
                    Ano
                  </option>
                </select>
              </div>
            </div>

            <TextField
              id='outlined-basic'
              label='Código de Segurança'
              required
              variant='outlined'
              name='cvc'
              autoComplete='off'
              className={styles.input}
            />
            <select className={styles.select}>
              <option value='' disabled selected>
                Opções de Parcelamento
              </option>
            </select>
          </article>
        </article>
      </section>

      <section className={styles.order_section}>
        <h1 className={styles.title}>Resumo do pedido</h1>
        <article className={styles.order_article}>
          <h2>Endereço de entrega</h2>
          <h3>Principal</h3>
          <p>Avenida Nova Veneza, 0 - Casa</p>
          <p>
            <strong>Bairro:</strong> Nova Veneza
          </p>
          <p>
            <strong>Cidade:</strong> Ubajara
          </p>
          <p>
            <strong>CEP:</strong> 62350-000
          </p>
        </article>

        <article className={styles.order_article}>
          <table>
            <tr>
              <th>Itens do Pedido</th>
              <th>Qtde</th>
              <th>Preço</th>
            </tr>
            <tr>
              <td>Camiseta Nike Dri-Fit Breathe Run Masculina</td>
              <td>1</td>
              <td>R$ 79,99</td>
            </tr>
          </table>
        </article>

        <article className={styles.order_title}>
          <h3>Frete</h3>
          <h3>R$ 20,00</h3>
        </article>

        <article className={styles.order_title}>
          <h3>Total</h3>
          <h3>R$ 100,00</h3>
        </article>
      </section>
    </section>
  );
};

export default PaymentForm;
