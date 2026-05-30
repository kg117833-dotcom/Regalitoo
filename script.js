const starsContainer = document.getElementById("stars");

for(let i = 0; i < 200; i++){

    let star = document.createElement("div");
    star.classList.add("star");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let size = 1 + Math.random() * 3;

    star.style.left = x + "px";
    star.style.top = y + "px";

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (1 + Math.random() * 3) + "s";

    starsContainer.appendChild(star);
}