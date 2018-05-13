import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">  
        <div className="spacer40"></div>
         <div className="credits"> 
           <div className="container pos-rel"> 
              <div className="row">
               <div className="col-md-4"> 
                  <div className="copyright">© My-App - <a href="/policies/privacy" >Privacy Policy</a>
               </div>
              </div>
              <div className="col-md-4 text-center"> </div>
              </div> 
              <div className="spacer40"></div> 
           </div> 
        </div> 
     </footer>
    );
  }
}

export default Footer;
