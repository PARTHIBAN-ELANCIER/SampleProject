import React, { Component } from 'react';
import '../../Home/Css/CountDown.css';
import Card from '@material-ui/core/Card';


class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%'}}>
                <div style={{width:'80%',marginLeft:'10%',display:'flex'}}>
                    <div style={{width:'70%',marginTop:'10%'}}>
                        <div className={'count'}>
                            COUNTDOWN
                        </div>
                        <div className={'count-header'}>
                            User Love AppDev To <br />
                            Make Cool Landing Page
                        </div>
                        <p style={{textAlign:'left'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                         incididunt ut viverra maecenas accumsan lacus vel facilisis. 
                        </p>
                    </div>

                    <div style={{width:'30%'}}>
                        <div style={{display:'flex'}}>
                            <Card style={{margin : '5%'}}>
                                <div className={'single-count'}>
                                    <div className={'count-icon'}>
                                        <img src="fa-download" />
                                    </div>
                                    <div className={'count-num'}>
                                        2000+
                                    </div>
                                    <p>
                                        Download
                                    </p>
                                </div>
                            </Card>
                            <Card style={{margin : '5%'}}>
                                <div className={'single-count'}>
                                    <div className={'count-icon'}>
                                        <img src="fa-download" />
                                    </div>
                                    <div className={'count-num'}>
                                        10000+
                                    </div>
                                    <p>
                                        Customer
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div style={{display:'flex'}}>
                            <Card style={{margin : '5%'}}>
                                <div className={'single-count'}>
                                    <div className={'count-icon'}>
                                        <img src="fa-download" />
                                    </div>
                                    <div className={'count-num'}>
                                        5000+
                                    </div>
                                    <p>
                                        Developer
                                    </p>
                                </div>
                            </Card>
                            <Card style={{margin : '5%'}}>
                                <div className={'single-count'}>
                                    <div className={'count-icon'}>
                                        <img src="fa-download" />
                                    </div>
                                    <div className={'count-num'}>
                                        50000+
                                    </div>
                                    <p>
                                        User
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CountDown;