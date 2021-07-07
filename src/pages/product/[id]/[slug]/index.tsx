import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-img-zoom';
import api from '../../../../services/api';
import styles from './styles.module.scss';

type ProductTypes = {
  id: string;
  slug: string;
  name: string;
  category: string;
  gender: string;
  price: number;
  imgUrl: string;
};

const Product: React.FC = () => {
  const router = useRouter();

  const [product, setProduct] = useState<ProductTypes>();
  const [loading, setLoading] = useState(true);

  const { id } = router.query;

  useEffect(() => {
    async function loadProduct() {
      if (router.isReady) {
        try {
          const response = await api.get(`/products/${id}`);
          setProduct(response.data);
          setLoading(false);
        } catch (e) {
          console.log(e.message);
        }
      }
    }

    loadProduct();
  }, [router.isReady, id]);

  if (product === undefined) return '';

  return loading ? (
    <h1>carregando...</h1>
  ) : (
    <section className={`container ${styles.product_section}`}>
      <Zoom
        img={product.imgUrl}
        zoomScale={2}
        width={1280}
        height={500}
        className={styles.img}
      />
      <aside className={styles.product_info}>
        <h1>{product.name}</h1>
        <p>
          Incididunt veniam do eu irure duis magna. Est Lorem laboris voluptate
          sint eiusmod proident sit eu ut deserunt dolor dolore consectetur.
          Commodo sint veniam sunt irure Lorem incididunt commodo consequat ad
          voluptate nulla excepteur consectetur reprehenderit.
        </p>
        <h2>R$ {product.price}</h2>

        <div className={styles.buttons}>
          <button className='primary'>Comprar</button>
          <button className='secondary'>Adicionar ao carrinho</button>
        </div>
      </aside>
    </section>
  );
};

export default Product;
