import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
root: {
  // background: '#202730'

},

  grid2: {
    marginLeft: "4rem"
  },

  img1: {

   width: '100%',
  
},

mainGriad: {
  marginTop: '4rem',
disply: 'flex',
justfyContent: "space-between",
alignItems: 'center'
},

txt2: {
  fontFamily: 'Bebas Neue',

    color: '#fff',
   textAlign: 'left',
   letterSpacing: '2px',
   fontWaight: '30px'
},

header: {
  fontFamily: 'Bebas Neue',

  color: '#fff',
  paddingBottom: '1rem'
},

welcomTo: {
  color: '#018DB0',
  
},
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing='2' className={classes.mainGriad}>
        <Grid item sm={12} md={5} lg={5} >
          <Typography variant='h4' className={classes.header}> About <span className={classes.welcomTo}>Wolf Financial's</span></Typography>
            <img src="../Assets/wolffinancials_graph.png" alt='' className={classes.img1} />
        </Grid>

        <Grid item sm={12} md={6} lg={6} className={classes.grid2}>
          
            <Typography className={classes.txt2}>
                  With the crypto space becoming increasingly crowded, it is becoming increasingly complex for new investors to enter the crypto space, this is due to the velocity at which the technology is evolving disrupting existing legacy financial systems and introducing a whole host of innovative technology much of
                   which never existed before and also radically transforming systems that we previously used to interact within cyberspace.

                  Here come the Wolf financials which is all about cryptocurrencies. Wolf financials strives to 
                  become the largest cryptocurrency centre in Africa, going as far as envisioning a community-driven crypto bank in future projects.
                   People should be able to come in and trade tokens for any BSC network token, both farm, and stake. We'll be releasing our token soon, which will let users farm and stake with their crypto, similar to pancake swapping or even better!
                   become the largest cryptocurrency centre in Africa, going as far as envisioning a community-driven crypto bank in future projects.
                   People should be able to come in and trade tokens for any BSC network token, both farm, and stake. We'll be releasing our token soon, which will let users farm and stake with their crypto, similar to pancake swapping or even better!
            </Typography>
            </Grid>
    </Grid>
    </div>
  );
}

export default About;
