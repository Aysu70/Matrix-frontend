import React,{ Component} from 'react';
import '../css/service-carusel.css';

class Slider extends Component{
    constructor(){
        super();
        this.state = {
            services: [
                {
                    id: 1,
                    product: "Barber Shop",
                    desc: "City Tower Barber Shop",
                    image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-15.png",
                    profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-1.jpg",
                    name: "John Doe",
                    loc: "City Tower, Road: 1285, USA",
                    disc: 450.00,
                    price: 500.00
                },
                {
                    id: 2,
                    product: "Premium Beard Trimmer",
                    desc: "Royal Grooming Hub",
                    image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-13.png",
                    profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-2.jpg",
                    name: "Jane Smith",
                    loc: "Ocean Avenue, Block: 567, Canada",
                    disc: 380.00,
                    price: 420.00
                },
                {
                    id: 3,
                    product: "Luxury Barber Apron",
                    desc: "Elite Cuts Studio",
                    image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-14.png",
                    profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-3.jpg",
                    name: "Mark Taylor",
                    loc: "Broadway Street, Suite: 402, UK",
                    disc: 95.00,
                    price: 120.00
                },
                {
                    id: 4,
                    product: "Deluxe Shaving Cream Set",
                    desc: "Urban Groomers",
                    image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-17.png",
                    profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg",
                    name: "Sarah Brown",
                    loc: "Main Boulevard, Plaza: 786, Australia",
                    disc: 65.00,
                    price: 85.00
                },
                {
                    id: 5,
                    product: "Ergonomic Barber Stool",
                    desc: "Trend Cuts",
                    image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-16.png",
                    profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg",
                    name: "Alex Green",
                    loc: "Lakeside Road, Lane: 112, New Zealand",
                    disc: 250.00,
                    price: 300.00
                }
            ],
            current: {
                id: 1,
                product: "Barber Shop",
                desc: "City Tower Barber Shop",
                image: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-15.png",
                profile: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-1.jpg",
                name: "John Doe",
                loc: "City Tower, Road: 1285, USA",
                disc: 450.00,
                price: 500.00               
            }
        }
    }
    nextbutton=()=>{
        let current_id = this.state.current.id;
        let count = this.state.services.length;
        if(current_id!== count){
            current_id++;
        }else{
            current_id = 1;
        }
        console.log(current_id);        
        let product = this.state.services[current_id-1].product;
        let desc = this.state.services[current_id-1].desc;
        let image = this.state.services[current_id-1].image;
        let profile = this.state.services[current_id-1].profile;
        let name = this.state.services[current_id-1].name;
        let loc = this.state.services[current_id-1].loc;
        let disc = this.state.services[current_id-1].disc;
        let price = this.state.services[current_id-1].price;
        this.setState({current:{id: current_id, product: product, desc: desc, image: image, profile: profile, name: name, loc: loc, disc: disc, price: price}});
        console.log(this.state.current)
    }
    previousbutton=()=>{
        let current_id = this.state.current.id;
        let count = this.state.services.length;
        if(current_id!== 1){
            current_id--;
        }else{
            current_id = count;
        }
        let product = this.state.services[current_id-1].product;
        let desc = this.state.services[current_id-1].desc;
        let image = this.state.services[current_id-1].image;
        let profile = this.state.services[current_id-1].profile;
        let name = this.state.services[current_id-1].name;
        let loc = this.state.services[current_id-1].loc;
        let disc = this.state.services[current_id-1].disc;
        let price = this.state.services[current_id-1].price;
        this.setState({current:{id: current_id, product: product, desc: desc, image: image, profile: profile, name: name, loc: loc, disc: disc, price: price}});
        console.log(this.state.current)

    }
    render(){
        return(
            <div className="outter-slider">
                <div className="slider">
                    <div className="displayed-image">
                        <div className="img">
                            <img id='serv' src={this.state.current.image} alt=""/>
                        </div>
                        <div className="words">
                            <div style={{color:"#747474"}} className="title">
                                <p>{this.state.current.product}</p>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#747474"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                </button>
                            </div>
                            <div style={{fontSize: "20px"}} className="descrp"><b>{this.state.current.desc}</b></div>
                            <div className="person">
                                <img src={this.state.current.profile} alt="" width="50px" height="50px"/>
                                <p style={{color:"#747474"}}>By</p>
                                <p style={{color:"#747474"}}><u>{this.state.current.name}</u></p>
                                </div>
                            <div style={{color:"#747474"}} className="loc">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#747474"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                                <p>{this.state.current.loc}</p>
                            </div>
                            <div className="price">
                                <span><b>${this.state.current.disc}</b></span>
                                <span style={{color:"#747474"}}>$<s>{this.state.current.price}</s></span>
                            </div>
                            <button style={{fontSize: "14px"}} type="button" className='booknow'>Book Now</button>
                        </div>
                    </div>
                    <div className="control-buttons">
                        <div id="previous">
                            <button type='button' onClick={this.previousbutton}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                            </button>
                        </div>
                        <div id="next">
                            <button type='button' onClick={this.nextbutton}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;