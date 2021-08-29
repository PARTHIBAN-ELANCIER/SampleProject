import React, { Component } from 'react';
import '../../Home/Css/Download.css';

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%'}}>
                <div style={{marginLeft:'10%',width:'80%',display:'flex'}}>
                    <div style={{width:'40%'}}>
                        <img src="img3.png" style={{width:'100%',height:'auto'}} />
                    </div>
                    <div style={{width:'50%',marginLeft:'10%',marginTop:'10%'}}>
                        <div className={'download'}>
                            Download
                        </div>
                        <div className={'download-header'}>
                            Download The Latest <br />
                            Version Of The App
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices Rcommodo viverra
                                maecenas accumsan lacus vel facilisis. 
                        </p>
                        <div style={{display:'flex'}}>
                            <div>
                                <img src="btn1.png" />
                            </div>
                            <div style={{marginLeft:'5%'}}>
                                <img src="btn2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Download;