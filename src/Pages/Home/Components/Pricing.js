import React, { Component } from 'react';
import '../../Home/Css/Pricing.css';
class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%', backgroundColor:'#fff9f5'}}>
                <div style={{ paddingTop:'5%',paddingBottom:'5%',marginTop:"10%"}}>
                    <div className={'pricing'}>
                        Pricing
                    </div>
                    <div className={'price-heading'}>
                        Get In Reasonable Price
                    </div>
                    <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor<br /> Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </p>

                    <div className={'pricing-nav'} style={{display:'flex'}}>
                        <button className={'btn1'}>Monthly</button>
                        <button className={'btn2'}>Yearly</button>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default Pricing;