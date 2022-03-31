document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.add("show");
        })
    })

    observer.observe(card);
})