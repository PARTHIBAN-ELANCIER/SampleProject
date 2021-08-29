import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextButton from './TextButton';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(-1),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  
  export default function NewAppBar(props) {
    const history = useHistory();
    const classes = useStyles();
    const [windowWidth , setWindowSize] = useState()
  
    useEffect(() => {
     
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
   console.log({windowWidth})
    return (
      <div className={classes.root} style={{width : '100%' , display : 'flex' , direction : 'row'}}>
        <AppBar style={{ display :windowWidth && windowWidth.width > 700 ?'block' : 'none' , backgroundColor : 'white' , color : '#55bde3' , marginTop : windowWidth && windowWidth.width > 700 ?'4%' :'17%'}} position="fixed" >
          <Toolbar style={{paddingTop : '0%' , paddingBottom : '0%' , paddingRight : '0%'}}>
            <Box>
              <img src="logo.png" style={{height:'70px',width:'40% '}}/>
            </Box>
            <Typography variant="h6" className={classes.title}>
              <Box display="flex" justifyContent="space-between" m={1} p={1}  style={{cursor : 'pointer' , marginLeft : '18%'}}>
                <Box p={1} onClick={()=>{
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                  history.push('/')
                }} >
                 <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> Home</b>
                </Box>
                {/* <Box p={1} onClick={()=>{
                  history.push('/KarudaCar')
                }} >
                 <b> ABOUT US </b>
                </Box> */}
                <Box p={1} onClick={()=>{
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                  history.push('/')
                }}>
                 <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Online Booking </b>
                </Box>
                <Box p={1} onClick={()=>{
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                  history.push('/')
                }}>
                 <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Tariff </b>
                </Box>
                <Box p={1} onClick={()=>{
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                  history.push('/')
                }}>
                 <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Contact Us </b>
                </Box>
                <Box p={1} style={{marginTop : '0.5%'}} >
                <Button variant="contained" style={{backgroundColor : '#55bde3' , color : 'white' ,marginTop:'0.5%' , height : '46px' }} onClick={()=>{
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                  history.push('/')
                }}>
                  Book Now
                </Button>
                </Box>
              </Box>  
            </Typography>
            
          </Toolbar>
        </AppBar>
  
        <MobAppBar props={history} />
      </div>
    );
  }
  