import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import styles from './styles.module.scss';

SwiperCore.use([Pagination, A11y, Autoplay]);

const Carrousel: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className={styles.slider}>
        <picture>
          <img
            src='https://cdna.artstation.com/p/assets/images/images/031/586/906/large/murugendra-hiremath-00001212.jpg?1604034460'
            alt=''
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>
        <picture>
          <img
            src='https://cdn.awsli.com.br/584/584136/arquivos/banner%202.png'
            alt=''
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>
        <picture>
          <img
            src='https://i.pinimg.com/originals/8e/dc/a0/8edca0fc9ba10f24a23a34753ec53588.jpg'
            alt=''
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>
        <picture>
          <img
            src='https://applemobile.pl/wp-content/uploads/2017/11/Ikona1-6.jpg'
            alt=''
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrousel;
