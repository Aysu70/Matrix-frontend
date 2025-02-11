const Loader=({canceloader})=>{
    const cancelLoading=()=>{
        canceloader(false)
    }
    setTimeout(cancelLoading, 2000)
    return(
        <>
        <div id="loading" className="default-theme light-theme">
            <div id="loader"></div>
        </div>
        </>
    )
}

export default Loader;