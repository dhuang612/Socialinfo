import React from 'react';
import './CardStock.css';
import reactjs from './reactjs.png';
import Header from './Header';
import Info from './Info';

const CardStock=(props)=>{

    return(
                <div className="ui container">
                    <Header />
                    <div className="ui segment pic">
                        <img className="ui centered large image"  src={reactjs}></img>
                      </div>
                      <Info/>
                </div>
         
         
    

    )
    
}
export default CardStock;       