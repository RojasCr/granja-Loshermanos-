const a = document.getElementsByClassName("redes");
const main = document.getElementById("main");
const anch = Array.from(document.getElementsByClassName("redes"));


const cambio = () =>{
    anch.forEach( an => {
        const altura = main.offsetHeight-an.offsetTop;

        if(scrollY > altura){
            an.style.visibility="visible";
            //contacto.style.opacity=0;
            an.style.animationName = "appear";
            an.style.animationDuration = "1s";
            an.style.animationTimingFunction = "linear";
    
        }
        if(scrollY < altura){
            an.style.visibility="hidden";
            an.style.animation="null";
    
        }
    });
    //console.log(anch);
}

document.addEventListener("scroll", cambio);