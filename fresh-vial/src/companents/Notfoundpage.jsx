import error from '../assests/photos/notfound.gif'

const Notfoundpage=()=>{
    return(
        <>
        <div className="container" style={{width: '100%'}}>
            <img src={error} alt="not found" id='notfound'/>
        </div>
        </>
    )
}

export default Notfoundpage;