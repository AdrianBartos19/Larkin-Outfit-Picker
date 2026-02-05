console.log('app.js načítaný');
const form = document.getElementById("category-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form)

    const selected = data.getAll("categories")

    console.log("Vybrané kategórie:", selected);
});