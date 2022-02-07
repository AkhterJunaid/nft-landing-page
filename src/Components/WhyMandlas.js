import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
marginTop: '4rem',
backgroundColor: "#000",

  },

  mainGrid: {
    padding: "2rem 0",
  },

  header: {
    color: '#018DB0',
       
     margin: '1rem 0rem',
    fontFamily: 'Bebas Neue',
  },

  headerPara: {
    color: '#cecece',
    fontWeight: "bold",
    paddingTop: "0.5rem",
  },

  imgHeader: {
    color: "#018DB0",
    fontFamily: 'Bebas Neue',
    fontWeight: "bold",


  },

  imgDes: {
    color: '#cecece',
    paddingTop: "1rem",
  },

  icons: {
    width: "25%",
    
  },

  grids: {
    backgroundColor: '#202730',
    padding: '1rem',
    margin: '1rem'
  },

  grid2: {
    backgroundColor: '#202730',
    padding: '27px 16px',
    margin: '1rem'
  }
}));

function WhyMandlas() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={classes.header} variant="h3">
          Why Mandala?
        </Typography>

        <Typography className={classes.headerPara}>
          Trade with confidence on a world-class matching engine with the largest
          liquidity pool in the world.
        </Typography>

      <Grid
        container
        className={classes.mainGrid}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={3} lg={4} className={classes.grids}>
       <img src="../Assets/icon1.png" alt="" className={classes.icons}/>
    

          <Typography className={classes.imgHeader} variant="h6">
            Compliance
          </Typography>

          <Typography variant='header1' className={classes.imgDes}>
            Mandala is committed to compliance. Our regulated global exchange
            operates with the highest standards of legal and regulatory
            requirements.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={4} className={classes.grid2}>
       <img src="../Assets/icon2.png" alt="" className={classes.icons}/>

            <Typography className={classes.imgHeader} variant="h6">
              Security
            </Typography>

            <Typography variant='header1' className={classes.imgDes}>
              Mandala is protected by Binance's cutting-edge security. All funds
              are secured by Binance and SAFU.
            </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={4} className={classes.grids}>
       <img src="../Assets/icon3.png" alt="" className={classes.icons}/>

            <Typography className={classes.imgHeader} variant="h6">
              Liquidity
            </Typography>

            <Typography variant='header1' className={classes.imgDes}>
              Our exchange shares Binance's liquidity, offering one of the largest
              liquidity pools in the world. Join us and trade hundreds of digital
              assets.
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhyMandlas;
