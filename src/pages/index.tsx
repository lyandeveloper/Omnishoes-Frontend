import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import styles from './styles.module.scss';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import Carrousel from '../components/Carrousel';
import api from '../services/api';
import axios from 'axios';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: 20,
  },
  gridList: {
    width: 800,
    padding: 30,
    height: 500,
    display: 'flex',
    flex: 1,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

type ProductTypes = {
  id: string;
  slug: string;
  name: string;
  category: string;
  gender: string;
  price: number;
  imgUrl: string;
};

const Home: React.FC = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <main>
      <Header />
      <Carrousel />
      <div className={`container ${classes.root}`}>
        <GridList
          cellHeight={400}
          className={classes.gridList}
          style={{ height: 'auto' }}
          cols={4}
          spacing={20}
        >
          {products.map((product: ProductTypes) => (
            <GridListTile key={product.id}>
              <Product
                id={product.id}
                imgSrc={product.imgUrl}
                title={product.name}
                price={product.price}
                slug={product.slug}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </main>
  );
};

export default Home;
