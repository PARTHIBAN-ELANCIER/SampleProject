import React, { Component } from 'react';
import '../../Home/Css/AppLandingPage.css';

class AppLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%'}}>
                <div style={{marginLeft:'20%'}}>
                    <div className={'great'}>
                        Greatest
                    </div>
                    <div className={'app-landing-page'}>
                        App Landing Page <br />
                        Your Business
                    </div>
                    <p style={{textAlign:'left'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br />incididunt utlabore et dolore magna aliqua.
                    </p>
                    <button className={'demo-button'} >get Demo </button>
                    <button className={'download-button'} style={{marginLeft:'2%'}}>download</button>
                </div>
            </div>
         );
    }
}
 
export default AppLandingPage;