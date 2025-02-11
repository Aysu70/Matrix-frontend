import {useEffect, useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import { add, remove, togglecheck, edit, clear, paste} from "./tools/slices/todoslices";
import Swal from 'sweetalert2'


const ToDo = () => {
  let data = useSelector((p) => p.todo);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const refs = useRef(new Map()).current;

  useEffect(() => {
    const storedTodos = localStorage.getItem("todo");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      parsedTodos.forEach(todo => dispatch(paste({id:todo.id, title:todo.title, checked:todo.checked})));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);


  const formSubmit = (e)=>{
    e.preventDefault();
    if (!inputRef.current.value) {
      Swal.fire({
        title: "Please, fill the blank!",
        icon: "warning"
      });
      } else {
      dispatch(add(inputRef.current.value));
      inputRef.current.value = "";
    }
  }
  const deleteElement = (e)=>{
    dispatch(remove(e.target.id));
  }
  const handleCheck = (e)=>{
    dispatch(togglecheck(e.target.id));
  }
  const handleEdit = (e) =>{
    if (e.target.value==="") {
      dispatch(remove(e.target.id))
    }
    else{
      dispatch(edit({id: e.target.id, newValue: e.target.value}));
    }
  }
  const handleClear=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-1",
        cancelButton: "btn btn-danger mx-1"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your to-do list has been deleted.",
          icon: "success"
        });
        dispatch(clear());
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your to-do list is safe.",
          icon: "error"
        });
      }
    });
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center rounded" style={{backgroundColor:'#fff'}}>
    <form style={{width:'100%'}} onSubmit={formSubmit} className="p-3 d-flex justify-content-center align-items-center">
    <input className="h-20 me-2" style={{width:'100%', border:'2px solid gray', borderTopRightRadius:"0px", borderBottomRightRadius:'0px', borderTopLeftRadius:"8px", borderBottomLeftRadius:'8px'}} ref={inputRef} type="text" autoFocus/>
    <button style={{border:'solid black 2px', borderTopRightRadius:"8px", borderBottomRightRadius:'8px'}} className="bg-dark h-20">
    <svg className="pb-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
    </button>
    </form>      
    {!data.length?
    <>
    <div className="d-flex justify-content-center align-items-center">
      <img style={{objectFit:'cover'}} width='auto' height={300} src="https://static.vecteezy.com/system/resources/previews/014/814/192/non_2x/creatively-designed-flat-conceptual-icon-of-no-task-vector.jpg" alt="" />
    </div>
    </>
      :
      <>

      {!data.filter((item)=>!item.checked).length?
        <img style={{objectFit:'cover'}} width='auto' height={300} src="https://img.freepik.com/premium-vector/no-pending-task_585024-51.jpg?w=1060" alt="" />
        :
        <ul className="d-flex flex-column justify-content-center align-items-center px-3" style={{maxHeight:'300px', overflowY:'scroll'}}>
        {data.map((item) => 
        <li key={item.id} className="d-flex my-1">
            <input defaultChecked={item.checked} className="me-2" onClick={handleCheck} type="checkbox" name={item.id} id={item.id} />
            <input style={{borderColor:'transparent'}} ref={inst=>inst === null ? refs.delete(item.id) : refs.set(item.id, inst)} onBlur={handleEdit} className={item.checked ? 'text-decoration-line-through' : ''} type="text" name={item.id} id={item.id} defaultValue={item.title}/>
            <div>
                <button id={item.id} onClick={() => refs.get(item.id).focus()} type="button" className="btn px-1">
                <svg xmlns="http://www.w3.org/2000/svg" height={18} viewBox="0 0 512 512"><path fill="#63e6be" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </button>
            </div>
            <div>
                <button id={item.id} onClick={deleteElement} type="button" className="btn px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height={18} viewBox="0 0 448 512"><path fill="#e66565" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </button>
            </div>
        </li>
        ).reverse()}
        </ul>
      }
      </>
      }
      <div className="d-flex justify-content-between align-items-end w-100 p-3">
        {data.length?
        <p style={{fontSize:'small', color: 'gray'}} className="m-0">Pending tasks: {data.filter((item)=>!item.checked).length}</p>:
        <p style={{fontSize:'small', color: 'gray'}} className="m-0">No pending task</p>
        }
        <button style={{fontSize:'small'}} onClick={handleClear} className="btn btn-outline-danger" type="button"><b>clear all</b></button>
      </div>
    </div>
  );
};

export default ToDo;