import React from "react";
import './Footer.css'
import Logo from './assets/BMW_Logo.svg'


function Footer(){
    return(
            <footer>
                <div className="foot-panel1">
                    Back to Top
                </div>
                <div className="foot-panel2">
                    <ul>
                        <p>Mumbai - Worli</p> <br />
                        <h4>Sales</h4>
                        <a>Dr Annie Besant Rd,</a>
                        <a>opp. Nehru Centre, Lotus Colony,</a>
                        <a>Worli, Mumbai, Maharashtra,</a>
                        <a>India - 400018.</a>
                        <a>Tel.: +91 226 7145100</a>
                        <a>Email: info@bmw-infinitycars.in  </a>
                    </ul>
                    <ul>
                        <p>Mumbai - Nariman Point</p> <br />
                        <h4>Sales & Service</h4>
                        <a>Maker Chamber VI,</a>
                        <a>Jamnalal Bajaj Road,</a>
                        <a>Nariman Point, Mumbai,</a>
                        <a>India - 400021.</a>
                        <a>Tel.: +91 226 6664800</a>
                        <a>Email: info@bmw-infinitycars.in  </a>
                    </ul>
                    <ul>
                        <p>Mumbai - Lal Baugh</p><br />
                        <h4>Service</h4>
                        <a>Godrej & Boyce MFG. Co. Property, </a>
                        <a>Plot No: 57 &58, Dattaram Khamkar Marg,</a>
                        <a>near my jio store, Mumbai, Maharashtra,</a>
                        <a>India - 400012.</a>
                        <a>Tel.: +91 226 1144444</a>    
                        <a>Email: info@bmw-infinitycars.in</a>    
                    </ul>
                    <ul>
                        <p>Indore</p> <br />
                        <h4>Sales & Service</h4>
                        <a>No. 17, Mangal Compound,</a>
                        <a>MR - 11, Pipliya Kumar,</a>
                        <a>Dewas Naka, Indore,</a>
                        <a>India - 452010.</a>
                        <a>Tel.: +91 7314008989</a>
                        <a>Email: info@bmw-infinitycars.in</a>
                    </ul>
                </div>
                <div className="foot-panel3">
                    <div className="logo">
                <img src={Logo} alt="logo"/>
                    </div>
                </div> 
            </footer>
    )

}

export default Footer