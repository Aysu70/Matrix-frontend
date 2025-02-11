import React,{ Component} from 'react';
import smile from '../assets/photos/smiling-emoticon-square-face.png';
import '../assets/css/style.css'
import 'animate.css';


class Api extends Component{
    constructor(){
        super();
        this.state = {
            products : [],
            categories: [],
            selectedcategory : "all",
            clicked : false
        }
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(reps=>reps.json())
        .then(data=>{
            this.setState({products: data});
        })
        fetch("https://fakestoreapi.com/products/categories")
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({categories: data})
        })
    }
    cancel=()=>{
        this.setState({clicked : false})        
    }
    cardPress(item){
        if (this.state.clicked=== false){
            this.setState({
                clicked: true
            })    
            let pop = document.querySelector(".pop-up");
            pop.innerHTML = `
                <div class="pop-up-content">
                    <div id="cancel-menu" >
                        <p id="cancelButton" >X</p>
                    </div>
                    <div id="bottom">
                        <div className="pic">
                            <img src=${item.image} width="200px" height = "auto"/>
                        </div>
                        <div className="words">
                            <div  id="category">${item.category}</div>
                            <div id="title"><b>${item.title}</b></div>
                            <div id="price-rating">
                                <div id="price">$${item.price}</div>
                                <div id="rating">
                                    <p>(${item.rating.rate})
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512" fill=${this.fillsvg(item.rating.rate)}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    </p>
                                </div>
                            </div>
                            <div id="desc">
                                <p><b>Description</b></p>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            document.querySelector("#cancelButton").addEventListener("click", this.cancel)
        }
    }


    componentDidUpdate(){
        let pop = document.querySelector(".pop-up");
        if(this.state.clicked === true){
            pop.style.display = "block";
        }else{
            pop.style.display = "none";
        }
    }

    fillsvg(rating){
        if(rating>3){
            return "green";
        }else if(rating>1){
            return "#ffd43b";
        }else{
            return "red";
        }
    }
    render(){  
        let filterbyCategory = this.state.products;
        document.querySelectorAll('.menu-button').forEach(button =>{
            button.addEventListener('click', ()=>{
                this.setState({selectedcategory: button.value});
                let smile = document.querySelector("#smiley")
                if(button.value === this.state.categories[0]){
                    smile.style.width = "20px"                   
                    smile.style.height = "20px"     
                    smile.style.transform = "translate(-8px, 0px)";
                    // button.firstChild.style.fill = "#FDB843";
                    // button.firstChild.style.width = "28px";
                }else if(button.value === this.state.categories[1]){
                    smile.style.width = "20px" 
                    smile.style.height = "20px"                                     
                    smile.style.transform = "translate(-4px, 0px)";
                }else if(button.value === this.state.categories[2]){
                    smile.style.width = "20px" 
                    smile.style.height = "20px"                                     
                    smile.style.transform = "translate(4px, 0px)";
                }else if(button.value === this.state.categories[3]){
                    smile.style.width = "20px"   
                    smile.style.height = "20px"                                   
                    smile.style.transform = "translate(8px, 0px)";
                }else{
                    smile.style.width = "24px"   
                    smile.style.height = "24px"                                   
                    smile.style.transform = "translate(0px, 0px)";
                }
            })
        })
        if(this.state.selectedcategory !== 'all'){
            filterbyCategory = this.state.products.filter((item)=> item.category === this.state.selectedcategory)  
        }
        return(
            <>
            <div className="buttong">
                <button className='menu-button' id='electronics' type="button" value={this.state.categories[0]}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-17 0-28.5-11.5T160-160v-40h-40v-160q0-17 11.5-28.5T160-400h40v-280q0-66 47-113t113-47q66 0 113 47t47 113v400q0 33 23.5 56.5T600-200q33 0 56.5-23.5T680-280v-280h-40q-17 0-28.5-11.5T600-600v-160h40v-40q0-17 11.5-28.5T680-840h80q17 0 28.5 11.5T800-800v40h40v160q0 17-11.5 28.5T800-560h-40v280q0 66-47 113t-113 47q-66 0-113-47t-47-113v-400q0-33-23.5-56.5T360-760q-33 0-56.5 23.5T280-680v280h40q17 0 28.5 11.5T360-360v160h-40v40q0 17-11.5 28.5T280-120h-80Z"/></svg>
                </button>
                <button className='menu-button' id='jewelery' type="button" value={this.state.categories[1]}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg>
                </button>
                <button className='menu-button' id='all' type="button" value='all'>
                    <img id='smiley' src={smile} alt="" width="24px" height="24px"/>
                </button>
                <button className='menu-button' id='men' type="button" value={this.state.categories[2]}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 320 512" width="24px"><path fill="#000000" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/></svg>
                </button>
                <button className='menu-button' id='women' type="button" value={this.state.categories[3]}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 320 512" width="24px"><path fill="#000000" d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384l-17.8 0c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3l11.6 0c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1L232 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-16 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"/></svg>
                </button>
            </div>
            {filterbyCategory.length === 0 ? (
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li id='tongue'>~</li>
                </ul>
            ): 
            (<div className="rows">
                {filterbyCategory.map(item=>(
                    <div className='outter-card animate__animated animate__fadeInUp' key={item.id}>
                        <div className="card" onClick={()=>this.cardPress(item)}>
                            <img className='picture' src={item.image} alt="" height="300px" width="auto"/>
                            <div className="words">
                                <div className="category">{item.category}</div>
                                <div className="title"><b>{item.title}</b></div>
                                <div className="price-rating">
                                    <div className="price">${item.price}</div>
                                    <div className="rating">
                                        <p>({item.rating.rate})
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512" fill={this.fillsvg(item.rating.rate)}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p><b>Description</b></p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <button className="heart">
                                <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>)          
            }
            <div className="pop-up animate__animated animate__fadeInUp"></div>
            </>
        )
    }
}

export default Api;

//heart-a bas