import React from 'react';
import HeaderComponent from './HeaderComponent';

class AboutComponent extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <HeaderComponent/>
                    <h1>About Us</h1>
                </div>
            
            </div>
        )
    }
}

export default AboutComponent;