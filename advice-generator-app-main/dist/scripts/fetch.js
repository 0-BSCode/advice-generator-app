document.addEventListener("DOMContentLoaded", () => {
    const cardBtn = document.querySelector(".card__btn");

    const fetchAdvice = async () => {
        const cardHeader = document.querySelector(".card__header");
        const cardContent = document.querySelector(".card__advice");
        const url = "https://api.adviceslip.com/advice";

        cardBtn.classList.add("card__btn--disabled");
        cardBtn.disabled = true;
        await fetch(url)
            .then(res => res.json())
            .then(data=> {
            cardHeader.textContent = `Advice #${data.slip.id}`;
            cardContent.textContent = `"${data.slip.advice}"`;
            })
            .catch(error => console.log(error));
        cardBtn.classList.remove("card__btn--disabled");
        cardBtn.disabled = false;
    }

    fetchAdvice();
    cardBtn.addEventListener("click", fetchAdvice);
})