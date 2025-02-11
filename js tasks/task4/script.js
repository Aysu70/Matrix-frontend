
function change(){
    document.querySelector(".img").className = "img2";
    document.querySelector(".img2").className = "img";
}
document.querySelector(".btn").addEventListener("click", change);

