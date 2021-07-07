import React from 'react';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { ImageSearchOutlined } from '@material-ui/icons';
// import { Container } from './styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
    boxShadow: 'none !important',
  },
});

type ProductTypes = {
  imgSrc: string;
  title: string;
  price: number;
  id: string;
  slug: string;
};

const Product: React.FC<ProductTypes> = ({
  imgSrc,
  title,
  price,
  id,
  slug,
}) => {
  const classes = useStyles();

  return (
    <a href={`/product/${id}/${slug}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={title}
            height='200'
            image={imgSrc}
            title={title}
            style={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h1'>
              {title}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='h2'>
              R$ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
};

export default Product;
