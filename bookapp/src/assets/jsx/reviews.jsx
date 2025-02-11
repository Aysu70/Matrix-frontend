import React,{ Component} from 'react';
import '../css/reviews.css'
class Reviews extends Component{
    render(){
        return(
            <div className="review">
                <div className="inner">
                    <div className="top">
                        <div className="left">
                            <div className="photo">
                                <img src={this.props.image} alt="" />
                            </div>
                            <div className="about">
                                <p className='name'>{this.props.name}</p>
                                <p className='verified-user'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#00B67A"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
                                    </span>
                                    <span>Verified User</span>
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <p className='location'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#747474"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                                </span>
                                <span style={{color:"#747474",fontSize:"14px"}}>{this.props.location}</span>
                            </p>
                            <p className='time'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#747474"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                                </span>
                                <span style={{color:"#747474",fontSize:"14px"}}>{this.props.time}</span>
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title" style={{fontSize: "20px", fontWeight: "bold", margin: "0 0 8px"}}>{this.props.title}</div>
                        <div className="detailed" style={{color: "#747474"}}>{this.props.detailed}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reviews;