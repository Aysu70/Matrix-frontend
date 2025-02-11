import React,{ Component} from 'react';
import '../css/carusel.css';

class Carusel extends Component{
    constructor(){
        super();
        this.state = {
            images: [
                {
                    id: 1,
                    src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-1.jpg'
                },
                {
                    id: 2,
                    src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-3.jpg'
                },
                {
                    id: 3,
                    src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-2.jpg'
                }
            ],
            currentimage: {
                id: 1,
                src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-1.jpg'
            }
        };
    }
    nextbutton=()=>{
        let current_id = this.state.currentimage.id;
        let count = this.state.images.length;
        if(current_id!== count){
            current_id++;
        }else{
            current_id = 1;
        }
        let source = this.state.images[current_id-1].src;
        this.setState({currentimage:{id: current_id, src: source}});
        // this.state.currentimage.id = current_id;
        // this.state.currentimage.src = source;
    }
    previousbutton=()=>{
        let current_id = this.state.currentimage.id;
        let count = this.state.images.length;
        if(current_id!== 1){
            current_id--;
        }else{
            current_id = count;
        }
        let source = this.state.images[current_id-1].src;
        this.setState({currentimage:{id: current_id, src: source}});
    }
    render(){
        return(
            <div className="outter-carusel">
                <div className="carusel">
                    <div className="displayed-image">
                        <img src={this.state.currentimage.src} alt="" height="560px" width="840px"/>
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
export default Carusel;