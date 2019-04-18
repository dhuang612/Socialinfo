import React from 'react';
import self from './self.jpg';
import './Header.css';

const Header = (props)=>{
    

        return(
            <div className="ui container">
                <div className="ui segment"><h1 className="name">Dan Huang</h1>
                <p>Junior React developer gaining programming skills.</p>
                <img className="ui small circular image"  src={self}/></div>
            </div>
        )
    


    
}

export default Header;