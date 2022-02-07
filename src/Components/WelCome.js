import {
  
    Grid,
   
    Typography,
    Box,
    Button,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/styles";
  import React from "react";
  import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
  import YouTubeIcon from '@material-ui/icons/YouTube';
  
  // Element styling starts here
  
  const useStyles = makeStyles(() => ({
  root: {
     height: '100%',
     widht: '100%',
  
     color: '#cecece',
   
     
  },

  mainGrid: {
    // paddingTop: '7rem',
    paddingBottom: '1rem',
  
  },

    img1: {
        width: '100%',
        border: '2px solid #fff'
    },
    img2: {
        width: '100%',
        marginTop: '2.5rem',
        border: '2px solid #fff'

    },

    welcomIntro:{
        marginTop: '1rem',
    fontFamily: 'Bebas Neue',
  textShadow:"2px 2px 3px #000",


       
    },

    welcomTo: {
      color: '#018DB0',
      
 },
 header: {
   textAlign: 'start',
   
 },


 headerText:{
   fontWeight: 'bold',
  textShadow:"2px 2px 3px #000",
  fontFamily: 'Bebas Neue',
  

 },

 headerText2:{
  fontWeight: 'bold',
  textShadow:"2px 2px 3px #000",
  fontFamily: 'Bebas Neue',
  display: 'flex',
  justifyContent: 'left',
padding: '2rem 0rem 0rem 0rem',
marginBottom: "1rem"



   

 },

 button2: {
  color: '#018DB0',
  // backgroundColor: '#018DB0',
  margin: '0rem 1rem',
  border: '1px solid #018DB0',
  "&:hover": {
    backgroundColor: '#fff',
    color: '#202730'
  }
  
 },

 button: {
  backgroundColor: '#018DB0',
  color: '#202730',
  
"&:hover": {
 backgroundColor: '#fff',
 color: '#018DB0'
 }
 },

 buttons: {
   margin: '2rem 0rem'
 },

 header2:{
display: 'flex',
//
 },

 date: {
   margin: '0rem 3rem 0rem 0rem'
 },

 grid2: {
  
  padding: '1rem',
  // backgroundColor: '#202730',
 widht: '100%',
 height: '100%',

  alignItems: "center"
  
 },

tokenName: {
  display: 'flex',
  justifyContent: "left",
  marginTop: '2rem'
},

tokenName1: {
  color: '#FAA300'
},

tokenSymbol: {
  marginLeft: '7rem'
},

btn2: {
  backgroundColor: "#FAA300",
   color: "#2B3542",
  marginTop: '2rem',
   display: 'flex',
  //  alignItems: "center",
  //  border: '1px solid #cecece',
   "&:hover": {
     backgroundColor: '#2b3542',
     color: '#cecece',
  textShadow:"2px 2px 3px #000",
}},

welcomImg: {
  width: '85%',
  // display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center'
}
     
  }));
  
  // Element styling ends here
  
  function WelCome() {
    const classes = useStyles();
    return (
      <div id='welcome' className={classes.root}>
           <Grid container     className={classes.mainGrid} alignItems='center'>
                  {/* first grid */}
                      <Grid item sm={12} md={6} lg={6} className={classes.header}>
                              <Typography variant="h4"  className={classes.headerText}>
                              <span className={classes.welcomTo}>WELCOME TO</span>  <n/>
                                 THE <br/> WOLF PACK
                              </Typography>

                              <Typography variant="h6" className={classes.welcomIntro}>

                              Wolf Financials is all about crypto and all for crypto, from a P2P, CEX, DEX, NFT, 
                              crypto schools and more.
                               Wolf Financials will strive to be the biggest crypto hub in Africa.
                              </Typography>

                              <Box className={classes.buttons}>
                                {/* first button */}
                              <Button
                                    variant="filled"
                                    
                                    size="medium"
                                    className={classes.button}
                                   
                                  >
                                    Trand Now
                               </Button>

                                {/* second button */}
                              <Button
                                    variant="filled"
                                    
                                    size="medium"
                                    className={classes.button2}
                                   
                                  >
                                    Buy mdx with fait
                               </Button>

                             
                              </Box>
                          </Grid>
                    {/* Second Grid */}

                    <Grid item sm={12} md={6} lg={6} className={classes.grid2} alignItems='center'>
    
                      <img src="../Assets/2RNb.gif" alt="" className={classes.welcomImg} />
                    </Grid>

                
              </Grid>
     
      </div>
    );
  }
  
  export default WelCome;
  