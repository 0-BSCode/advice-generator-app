document.addEventListener("DOMContentLoaded", () => {
    const attributionImg = document.querySelector(".attribution__profile");
    const attributionText = document.querySelector(".attribution__links");
    let clicked = false;

    attributionImg.addEventListener("click", () => {
        clicked = !clicked;
        if (clicked) {
            attributionText.style.animationName = 'expand';
            attributionText.style.transform = "rotateX(0deg)";
        } else {
            attributionText.style.animationName = 'contract';
            attributionText.style.transform = "rotateX(90deg)";
        }

    })
})