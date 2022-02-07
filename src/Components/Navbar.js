import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";
import { makeStyles, Grid, Button } from "@material-ui/core";

// import "../App.css";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#202730",
    padding: "0.5rem 0",
  },
  navLinks: {
    margin: "0 0.4rem",
    color: '#cecece',
    // textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "none",
      color: "#c6e1f9",
      transition: ".5s",
    },
  },
  menuLinks: {
    padding: "0 1rem",
    color: "#fff",
    textTransform: "capitalize",
    cursor: "pointer",
    fontSize: "1.3rem",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
      transition: ".5s",
    },
  },
  navBrand: {
    display: "flex",
    alignItems: "center",

    cursor: "pointer",
  },
  navSpan: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: ".2rem .6rem",
    border: "3px solid #fff",
    borderRadius: "10px",
  },
  
  menuBox: {
    margin: "4.7rem 0 0 0",
  },
  navBox: {
    backgroundColor: "#192C30",
    width: "100vw",
    color: "#fff",
  },
  menutypo: {
    padding: "1rem 0",
  },

  navLogo: {
    width: '150px',
    // marginLeft: '1.5rem'

  },

  menuText: {
    display: 'flex',
    justifyContent: 'right'
  },

  menuLogo: {
    marginLeft: '2rem'
  },

  menuButton: {
    color: '#018DB0',
    // backgroundColor: '#018DB0',
    padding: '0.5rem 1rem',
    border: '1px solid #018DB0',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#202730'
    }
   
  },

  menuButton2: {
    backgroundColor: '#018DB0',
    color: '#202730',
    padding: '0.5rem 1rem',
 "&:hover": {
   backgroundColor: '#fff',
   color: '#018DB0'
 }
   
  },

  menuButtonGrid: {
    margin: '0rem 0.4rem',
    alignItems: 'center',
 
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar disableGutters>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={4} sm={4} md={1} className={classes.menuLogo}>
            <Box sx={{ width: { xs: "50%", md: "100%" } }}>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.navBrand}
              >
                  <img
                  className={classes.navLogo}
                src="../Assets/wolf_logo_large.png"
               
                />
              </Link>
            </Box>
          </Grid>
          <Grid md="6" lg="7" className={classes.menuText}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
             
              <Link
                activeClass="active"
                to="Roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className={classes.navLinks}
                delay={100}
              >
               Mdx Token
              </Link>
              <Link
                activeClass="active"
                to="Team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                delay={100}
                className={classes.navLinks}
              >
                Trading Bots 
              </Link>
              <Link
                activeClass="active"
                to="Faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                delay={100}
                className={classes.navLinks}
              >
               Blog
              </Link>
              <Link
                activeClass="active"
                to="Faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                delay={100}
                className={classes.navLinks}
              >
                Team
              </Link>

              <Link
                activeClass="active"
                to="Faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                delay={100}
                className={classes.navLinks}
              >
                 Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item sm={4} md={4} lg={3} justifyContent="flex-end">
            <Grid container  justifyContent="flex-end" alignItems="center">
              <Grid item sm={4} md={4} lg={4} className={classes.menuButtonGrid}>
                <Button variant='outlined' size='small' color="white" className={classes.menuButton}> Sign In </Button>
              </Grid>
              <Grid item sm={6} lg={6}>
              {/* <Box sx={{ display: { xs: "inline", md: "none", lg:"flex"} }}> */}
                 <div>
                 <Button variant='contained' size='small'  className={classes.menuButton2}> Get Started </Button>
                 </div>
                {/* </Box> */}
              </Grid>
            
           
            </Grid>

            

          </Grid>

          <Grid item sm={2} >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.menuContainer}>
                <Menu
                  className={classes.menuBox}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <div className={classes.navBox}>
                    <Typography className={classes.menutypo}>
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className={classes.menuLinks}
                        delay={100}
                        onClick={handleCloseNavMenu}
                      >
                        curated drops
                      </Link>
                    </Typography>

                    <Typography className={classes.menutypo}>
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className={classes.menuLinks}
                        delay={100}
                        onClick={handleCloseNavMenu}
                      >
                        verified drops
                      </Link>
                    </Typography>

                    <Typography className={classes.menutypo}>
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className={classes.menuLinks}
                        delay={100}
                        onClick={handleCloseNavMenu}
                      >
                        marketplace
                      </Link>
                    </Typography>

                    <Typography className={classes.menutypo}>
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className={classes.menuLinks}
                        delay={100}
                        onClick={handleCloseNavMenu}
                      >
                        team
                      </Link>
                    </Typography>

                    <Typography className={classes.menutypo}>
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className={classes.menuLinks}
                        delay={100}
                        onClick={handleCloseNavMenu}
                      >
                        faq
                      </Link>
                    </Typography>

                  
                  </div>
                </Menu>
              </div>
            </Box>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
