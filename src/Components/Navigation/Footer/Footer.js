import React from 'react';
import classes from './Footer.module.css';
import FLogo from '../../../Assets/3Logo.png'

const Footer = () => {
 return (
  <footer className={classes.Footer}>
     <div className="container">
      <div className={classes.Grid}>
         <div className={classes.FooterLogo}>
           <img src={FLogo} alt=""/>
           </div>
       
        <div className={classes.Policy}>
             <p>T&Cs | Privay policy | Cookie policy</p>
        </div>
        </div>
     </div>
  </footer>
 )
}

export default Footer
