import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CheckoutForm: React.FC = () => {
  const [states, setStates] = useState([]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const d = new Date('01 ' + 'Jan 1903');
  const first = d.getFullYear();

  const s = new Date();
  const second = s.getFullYear() - 6;
  const years = Array();

  for (let i = first; i <= second; i++) years.push(i);

  async function getStatesFromBrasil() {
    const response = await axios
      .get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      )
      .then((response) => {
        setStates(response.data);
      });
  }

  useEffect(() => {
    getStatesFromBrasil();
  }, []);

  return (
    <form className={styles.checkout_form}>
      <div className={styles.checkout_form_group}>
        <TextField
          id='outlined-basic'
          label='Nome'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Sobrenome'
          required
          variant='outlined'
        />
        <FormControl>
          <FormLabel component='legend'>Sexo:</FormLabel>
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
              value='Masculino'
              control={<Radio />}
              label='Masculino'
            />
            <FormControlLabel
              value='Feminino'
              control={<Radio />}
              label='Feminino'
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles.checkout_form_group}>
        <select name='day' id=''>
          <option selected disabled>
            Dia
          </option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select name='month' id=''>
          <option selected disabled>
            Mês
          </option>
          {moment.monthsShort().map((months) => (
            <option key={months} value={months}>
              {months}
            </option>
          ))}
        </select>
        <select name='year' id=''>
          <option selected disabled>
            Ano
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <TextField
          id='outlined-basic'
          label='CPF'
          required
          variant='outlined'
        />
      </div>
      <div className={styles.checkout_form_group}>
        <TextField
          id='outlined-basic'
          label='CEP'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Tipo do Endereço'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Nome da rua'
          required
          variant='outlined'
        />
      </div>
      <div className={styles.checkout_form_group}>
        <TextField
          id='outlined-basic'
          label='Número'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Complemento'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Bairro'
          required
          variant='outlined'
        />
      </div>
      <div className={styles.checkout_form_group}>
        <select name='state' id=''>
          <option selected disabled>
            Estado
          </option>
          {states.map((state) => (
            <option key={state.id} value={state.nome}>
              {state.nome}
            </option>
          ))}
        </select>
        <TextField
          id='outlined-basic'
          label='Cidade'
          required
          variant='outlined'
        />
        <TextField
          id='outlined-basic'
          label='Ponto de referência'
          required
          variant='outlined'
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
