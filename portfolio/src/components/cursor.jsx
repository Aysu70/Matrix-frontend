const Cursor=()=>{
  let movePointer=(e)=>{
    let cursor_1 = document.getElementById('cursor-1')
    let cursor_2 = document.querySelector('.cursor-2')
    let x = e.clientX;
    let y = e.clientY;
    cursor_1.style.transform = `translate(calc(-50% + ${x-8}px), calc(-50% + ${y-8}px))`
    cursor_2.style.transform = `translate(calc(${x -13}px), calc(${y-13}px))`
    // cursor_1.style.left = `${x-22}px`
    // cursor_1.style.top = `${y-22}px`
    // cursor_2.style.left = `${x-5}px`
    // cursor_2.style.top = `${y-5}px`
  };
  window.addEventListener('pointermove', movePointer);
  return(
    <>
    <div id="cursor-1"></div>
    <div className="cursor-2"></div>
    </>
  )
}

export default Cursor;
