import ToDo from './ToDo'

const App=()=>{
    return(
        <>
        <div className="todo-wrapper w-100 vh-100" style={{backgroundColor:'#ededed'}}>
        <div className="container h-100">
            <div className="todo d-flex justify-content-center align-items-center h-100">
            <ToDo/>
            </div>
        </div>
        </div>
        </>
    )
}

export default App;