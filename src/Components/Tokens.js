import {
    Typography,
    Grid,
   
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/styles";
  import React from "react";

  
  // Element styling starts here
  
  const useStyles = makeStyles(() => ({
    grid2: {
        
    },
    mandlaToken: {
        color: '#018DB0',
        textAlign: 'left',
        margin: '1rem 0rem',
    fontFamily: 'Bebas Neue',


    },

    tokenDetails: {
        color: '#cecece',
        textAlign: 'left',
    fontFamily: 'Bebas Neue',


    }

  }));
  
  // Element styling ends here
  
  function Tokens() {
    const classes = useStyles();
    return (
      <div id='welcome' className={classes.root}>
           
              

        <Grid container justifyContent="space-between" alignItems='center'>
                {/* first grid */}
                <Grid item sm={12} md={4} lg={6}>
                        <iframe 
                        width="380"
                        height="240"
                        src='https://www.youtube.com/embed/HtuaMylK0MQ?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.mandala.exchange&playsinline=1&enablejsapi=1&widgetid=1'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                        />
                </Grid>


                {/* second grid */}

                <Grid item sm={12} md={6} lg={6} className={classes.grid2}>
                    <Typography variant="h3" className={classes.mandlaToken}>
                        Mandala Token
                    </Typography>

                    <Typography variant="h6" className={classes.tokenDetails}>
                    Mandala has created a dynamic trading environment whereby the Mandala Token (MDXT) functions to provide:
                    <br/>
                    <li>Specialized trading capabilities</li>
                    <li>Referral rewards</li>
                    <li>Trading rebates</li>

                    </Typography>
                    </Grid>

        </Grid>
                   
     
      </div>
    );
  }
  
  export default Tokens;
  