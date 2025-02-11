import {BeatLoader} from 'react-spinners'

const Preloader=()=>{
    return(
        <div style={{width:'100%', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <BeatLoader 
                margin={2}
                size={20}
            />
        </div>
    )
}

export default Preloader;