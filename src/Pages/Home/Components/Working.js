import React, { Component } from 'react';
import '../../Home/Css/Working.css';
import Card from '@material-ui/core/Card';

class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%',marginTop:'10%',background: '#fcfcfc',marginBottom:'20%'}}>
                <div style={{width:'80%',marginLeft:'10%',paddingTop:'5%', paddingBottom:'5%'}}>
                    <div className={'work'} >
                        HOW IT WORKS
                    </div>
                    <div className={'service'}>
                        We Provides Service
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
                            labore et dolore accumsan lacus vel facilisis. 
                    </p>
                    <div style={{display:'flex'}}>
                        <Card>
                            <div style={{marginLeft:'10%',marginTop:'10%',marginBottom:'10%'}}> 
                                <div className={'icon-div'}>
                                    <img src="icon1.png" className={'ser-icon'} />
                                </div>
                                <div className={'card-header'}>
                                    Clean Design
                                </div>
                                <p style={{textAlign:'left'}}>
                                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod te <br /> incididunt ut
                                    accumsan. 
                                </p>
                                <button className={'template-btn2'}>Read More</button>
                            </div>
                        </Card>
                        <Card style={{marginLeft:'10%'}}>
                            <div style={{marginLeft:'10%',marginTop:'10%',marginBottom:'10%'}}> 
                                <div className={'icon-div'}>
                                    <img src="icon2.png" className={'ser-icon'} />
                                </div>
                                <div className={'card-header'}>
                                    Easy To Use
                                </div>
                                <p style={{textAlign:'left'}}>
                                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod te <br /> incididunt ut
                                    accumsan. 
                                </p>
                                <button className={'template-btn2'}>Read More</button>
                            </div>
                        </Card>
                        <Card style={{marginLeft:'10%'}}>
                            <div style={{marginLeft:'10%',marginTop:'10%',marginBottom:'10%'}}> 
                                <div className={'icon-div'}>
                                    <img src="icon3.png" className={'ser-icon'} />
                                </div>
                                <div className={'card-header'}>
                                    Pixel Perfect
                                </div>
                                <p style={{textAlign:'left'}}>
                                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod te <br /> incididunt ut
                                    accumsan. 
                                </p>
                                <button className={'template-btn2'}>Read More</button>
                            </div>
                            
                        </Card>
                    </div>
                  
                </div>
            </div>
         );
    }
}
 
export default Working;