import React, { Component } from 'react';
import AppLandingPage from '../Components/AppLandingPage';
import CountDown from '../Components/CountDown';
import Download from '../Components/Download';
import Feature from '../Components/Feature';
import Pricing from '../Components/Pricing';
import Working from '../Components/Working';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <AppLandingPage />
                <Feature />
                <Working />
                <CountDown />
                <Download />
                <Pricing />
            </div>
         );
    }
}
 
export default Home;