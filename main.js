document.getElementById("btn").addEventListener("click", function () {
    console.log("play");
    creaGriglia();
});


function creaGriglia() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    const livello = getLivello();
    let numCelleTotali;
    let numCellePerRiga;
   const  numeriCasuali =  [16];
    


for (let i = 1; i <= 16; i++) {
    let x = Math.floor((Math.random() * 10) + 1);
     let cella = creaQuadrato(i, bomba);
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;
    console.log(x);
}


    if (livello == 1) {

        numCelleTotali = 100;
        numCellePerRiga = 10;

    } else if (livello == 2) {

        numCelleTotali = 64;
        numCellePerRiga = 8;

    } else if (livello == 3) {

        numCelleTotali = 49;
        numCellePerRiga = 7;
    }

    const bomba = getRndInteger(1, numCelleTotali);
    
    
    for (let i = 1; i <= numCelleTotali; i++) {
        let cella = creaQuadrato(i, bomba);
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;

        if(i==bomba) {
            cella.style.border = "solid 1px red";
        }

        grid.appendChild(cella);

    }
}

function getLivello() {

    const livello = parseInt(document.getElementById("level").value);
    console.log("Difficoltà: ", livello);
    return livello;
}

function creaQuadrato(numero, bomba) {

    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerText = numero;


    cella.addEventListener("click", function () {

        cella.classList.toggle("highlight");

    });

    return cella;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}