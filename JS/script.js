// Active Navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20 ){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// Counter 

document.addEventListener("DOMContentLoaded",() => {
    function counter(id,start,end,duration){
        let object = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            object.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("counter-one",0,1287,3000);
    counter("counter-two",100,786,2000);
    counter("counter-three",0,1440,3000);
    counter("counter-four",0,86,2000);
});