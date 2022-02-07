import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import './App.css';
import Navbar from './Components/Navbar'
import WelCome from './Components/WelCome';
import WhyMandlas from './Components/WhyMandlas';
// import About from './Components/About';
import Tokens from './Components/Tokens';

const useStyles=makeStyles((theme)=>({
  root: {
    backgroundColor: "#000",
    padding: '2rem 0rem 0rem 1.4rem'
  }
}));


function App() {

  const classes=useStyles();

  return (
    <div className="App">
     
         <Navbar/>
         <div className={classes.root}> 
         
              <Container >
              
              <WelCome/> 
              <Tokens/>
              {/* <About/> */}
              <WhyMandlas/>
              </Container>
          </div>
            

         
    </div>
  );
}

export default App;
