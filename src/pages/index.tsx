import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Product from '../components/Product';
import styles from './styles.module.scss';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',  
    overflow: 'hidden',  
  },
  gridList: {
    width: 800, 
    padding: 30, 
    height: 500, 
    display: 'flex',
    flex: 1
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function Home() {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  
  function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
  
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

  return (
    <main>
      <Header/>
      <div className={classes.root}> 
      <GridList cellHeight={400}  className={classes.gridList} style={{ height: 'auto' }} cols={width < 768 ? 1 : 4} spacing={20}> 
        <GridListTile >
          <Product imgSrc="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg" title="AFROJACK Men's" price={170}/>
        </GridListTile>
        <GridListTile>
          <Product imgSrc="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621283126-t-shirts-buckmason-black-slub-1621282639.jpg" title="Relaxed Tee" price={42}/>
        </GridListTile>
        <GridListTile >
          <Product imgSrc="https://a-static.mlcdn.com.br/618x463/apple-watch-series-4-gps-cellular-44mm-caixa-de-aluminio-prateada-e-pulseira-esportiva-branca/mobstore/306151/0a99aff1fe10541f902ecd35d086ecea.jpg" title="Apple Watch Series 4" price={3000}/>
        </GridListTile> 
        <GridListTile >
          <Product imgSrc="https://assets.ajio.com/medias/sys_master/root/20210403/NNuZ/606896f4f997dd7b64618f74/-1117Wx1400H-461455469-olive-MODEL.jpg" title="Cuffed Cargo" price={100}/>
        </GridListTile> 
      </GridList> 
      </div>
    </main>
  );
}

export default Home;
