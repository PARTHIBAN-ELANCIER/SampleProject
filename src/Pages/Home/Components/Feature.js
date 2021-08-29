import React, { Component } from 'react';
import '../../Home/Css/Feature.css';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:"100%",marginTop:'10%'}}>
                <div style={{width:'80%',marginLeft:'10%',display:'flex'}}>
                    <div style={{width:"50%"}}>
                        <img src="img2.png" style={{width:'100%',height:'100%'}} />
                    </div>
                    <div style={{width:"50%",marginTop:'5%'}} >
                        <div className={'feature'}>
                            FEATURE  
                        </div>
                        <div className={'our'}>
                            Our Smart Feature
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum <br />suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan <br />lacus vel facilisis. 
                        </p>
                        <ul style={{display:'flex'}}>
                            <li>
                                <span>
                                    <i className={'fa-check-circle'}>
                                    </i>
                                </span>
                                Ratina Ready
                            </li>
                            <li style={{marginLeft:"10%"}}>
                                <span>
                                    <i className={'fa-check-circle'}>
                                    </i>
                                </span>
                                Minimal Interface
                            </li>
                        </ul>
                        <ul style={{display:'flex'}}>
                            <li>
                                <span>
                                    <i className={'fa-check-circle'}>
                                    </i>
                                </span>
                                User Friendly
                            </li>
                            <li style={{marginLeft:"10%"}}>
                                <span>
                                    <i className={'fa-check-circle'}>
                                    </i>
                                </span>
                                Fast Messaging
                            </li>
                        </ul>
                        <button className={'template-btn1'}>View More</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Feature;