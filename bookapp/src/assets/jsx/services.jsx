import React,{ Component} from 'react';
import '../css/services.css'
class Services extends Component{
    render(){
        return(
            <div className="outter-services">
                <div className="services">
                    <div className="title">
                        <div className="left">
                            <p style={{color:"#747474",fontSize:"16px"}}>Barber Services</p>
                            <p style={{color:"#121212",fontSize:"32px", fontWeight: "bold", margin: "4px 0px"}}>Men's Haircuts And Hair styles</p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#747474"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                                </span>
                                <span style={{color:"#747474",fontSize:"14px"}}>Tokyo city tower, Road No: 1280, Housing Apartment, Japan</span>
                            </p>                        
                        </div>
                        <div className="right">
                            <div className="cost">
                                <p style={{color:"#121212",fontSize:"24px", fontWeight: "bold"}}>$150.00</p>
                                <p style={{color:"#747474",fontSize:"18px", fontWeight: "bold"}}>$200.00</p>
                            </div>
                            <div className="rev">
                                <img src="https://themeforest.kreativdev.com/bookapp/demo/assets/images/vendor/shop-14.png" alt="" weight="50px"  height="50px"/>
                                <p style={{color:"#121212",fontSize:"18px", fontWeight: "bold", margin: "0px 0px 8px"}}>By Jonathan Doe</p>
                            </div>
                        </div>
                    </div>
                    <div className="desc-1" style={{padding:"40px 0 0"}}>
                        <p style={{color:"#121212",fontSize:"24px", margin:"0 0 15px"}}><b>Service Description</b></p>
                        <p style={{color:"#747474",fontSize:"16px", margin:"0 0 15px"}}>
                        Get Barbers at your doorstep now on your demand as per your required time and date. Trim your regular hairstyle or get a new look with a new style from the catalog. Even if you are too busy in the office and have a meeting to attend, why not get the job done in the office itself!! Choose a regular scissor cut or ask for a trimmer cut, any style you want is just a tap away!
                        </p>
                        <p style={{color:"#747474",fontSize:"16px"}}>
                        Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempori amader Magnis mollis lobortis nam, montes ut, consequat sed amet nullam.
                        </p>
                    </div>
                    <div className="desc-2" style={{padding:"40px 0 0"}}>
                        <p style={{color:"#121212",fontSize:"24px", margin:"0 0 15px"}}><b>Service Description</b></p>
                        <ul>
                            <li><b>Service Booking:</b><span>3 hours before service delivery</span></li>
                            <li><b>Service Duration:</b><span> 40 minutes (can be extended up to 10 minutes)</span></li>
                            <li><b>Service Availability:</b><span> 9 Am to 7 pm</span></li>
                        </ul>
                    </div>
                    <div className="features" style={{padding:"40px 0 0", margin: "0 0 20px"}}>
                        <p style={{color:"#121212",fontSize:"24px", margin:"0 0 15px"}}><b>Service Features</b></p>
                        <ol>
                            <li>100% Secure Services</li>
                            <li>Covid 19 Safety</li>
                            <li>Easy Payment Method</li>
                            <li>Services Quality Ensure</li>
                        </ol>
                    </div>
                    <div className="booknow">
                        <div className="question">
                            <p style={{color:"#121212",fontSize:"18px", fontWeight: "bold", margin: "0px 0px 16px"}}>Do You Want to Book Men’s Haircut And Hair Style Services?</p>
                        </div>
                        <div className="loc">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ff0037"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            </button>
                            <div className="yourloc">
                                <p style={{color:"#121212", fontWeight: "600"}}>Your Location</p>
                                <select name="locs" id="locs">
                                    <option value="Madrid">Madrid</option>
                                    <option value="Barcelena">Barcelena</option>
                                    <option value="London">London</option>
                                </select>
                            </div>
                        </div>
                        <div className="book">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                    <p>Book Now</p>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;