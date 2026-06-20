window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 2000);
    }

});


const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

const spotlight =
document.querySelector(".mouse-spotlight");

document.addEventListener("mousemove", (e) => {

    spotlight.style.left =
    e.clientX + "px";

    spotlight.style.top =
    e.clientY + "px";

});

/* ==========================================
   GOLD PARTICLES
========================================== */

const particlesContainer =
document.querySelector(".particles");

for(let i = 0; i < 25; i++){

    const particle =
    document.createElement("span");

    particle.style.left =
    Math.random() * 100 + "%";

    const size =
    Math.random() * 4 + 2;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.animationDuration =
    (10 + Math.random() * 15) + "s";

    particle.style.animationDelay =
    Math.random() * 10 + "s";

    particle.style.opacity =
    Math.random();

    particlesContainer.appendChild(
        particle
    );
}
