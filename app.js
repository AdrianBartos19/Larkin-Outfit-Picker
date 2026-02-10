console.log('app.js načítaný');

function randomOneToThree() {
    return Math.floor(Math.random()*3)+1;
}


function renderGrid(selectedArr) {
    console.log("renderGrid: budem renderovať", selectedArr);
}

function renderOnePerSelected(selected) {
    var from = document.querySelector('.containter')
    var grid = document.getElementById("grid");
    // 1) vyčisti grid

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // 2) prejdi všetky vybrané kategórie
    var i;
    for (i = 0; i < selected.length; i++) {
        var category = selected[i];

        // 2a) vygeneruj náhodné číslo 1..3
        var n = randomOneToThree();

        // 2b) poskladaj cestu k obrázku: images/<kategoria>/<n>.png
        var src = "images/" + category + "/" + String(n) + ".png";

        console.log(src)
        // 2c) vytvor kartu
        var card = document.createElement("article");
        card.className = "card";



        // obrázok
        var img = document.createElement("img");
        img.className = "card__img";
        img.alt = category + " – obrázok";
        img.loading = "lazy";
        img.src = src;

        // poskladaj DOM štruktúru
        card.appendChild(img);

        // vlož do gridu
        grid.appendChild(card);
    }

    form.appendChild(grid)
}

console.log(randomOneToThree())


const IMAGE_DATA = {
    tricka:  ["1.png", "2.png", "3.png"],
    nohavice:["1.png", "2.png", "3.png"],
    topanky: ["1.png", "2.png", "3.png"],
};

const LABELS = {
    tricka: "Tričká",
    nohavice: "Nohavice",
    topanky: "Topánky",
}




const form = document.getElementById("category-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //FormData -> vstavany typ ktory ziska vsetky data formu
    const data = new FormData(form)

    //getAll ziska vsetky zaskrtnute hodnoty -> ak neni zaskrtnute tak jeho value neni poslane
    const selectedArr = data.getAll("categories");

    console.log("Vybrané kategórie:", selectedArr);


    renderGrid(selectedArr);
    renderOnePerSelected(selectedArr);
});






