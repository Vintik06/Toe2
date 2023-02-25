
let cells = document.querySelectorAll(".cells"); 
let vertical1 = document.querySelectorAll(".vertical1"); 
let vertical2 = document.querySelectorAll(".vertical2"); 
let vertical3 = document.querySelectorAll(".vertical3"); 
let horizontal1 = document.querySelectorAll(".horizontal1"); 
let horizontal2 = document.querySelectorAll(".horizontal2"); 
let horizontal3 = document.querySelectorAll(".horizontal3");
let diagonal1 = document.querySelectorAll(".diagonal1"); 
let diagonal2 = document.querySelectorAll(".diagonal2");

let counter = 0;
let side;

for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    element.addEventListener("click", (e) => {
        const id = e.target.id;
        if (counter % 2 == 0) {
            // alert("непарне" + id);
            document.getElementById(id).innerHTML = '<p>o</p>';
            document.getElementById(id).classList.add("o");
            side = "o";
        } else {
            // alert("парне" + id);
            document.getElementById(id).innerHTML = '<p>x</p>';
            document.getElementById(id).classList.add("x");
            side = "x";
        }
        document.getElementById(id).classList.add("disabled");
        let arrayVertical1 = [];
        for (let index = 0; index < vertical1.length; index++) {
            const element = vertical1[index];
            arrayVertical1.push(element.innerHTML)
        }

        let arrayVertical2 = [];
        for (let index = 0; index < vertical2.length; index++) {
            const element = vertical2[index];
            arrayVertical2.push(element.innerHTML)
        }

        let arrayVertical3 = [];
        for (let index = 0; index < vertical3.length; index++) {
            const element = vertical3[index];
            arrayVertical3.push(element.innerHTML)
        }

        let arrayHorizontal1 = [];
        for (let index = 0; index < horizontal1.length; index++) {
            const element = horizontal1[index];
            arrayHorizontal1.push(element.innerHTML)
        }

        let arrayHorizontal2 = [];
        for (let index = 0; index < horizontal2.length; index++) {
            const element = horizontal2[index];
            arrayHorizontal2.push(element.innerHTML)
        }

        let arrayHorizontal3 = [];
        for (let index = 0; index < horizontal3.length; index++) {
            const element = horizontal3[index];
            arrayHorizontal3.push(element.innerHTML)
        }

        let arrayDiagonal1 = [];
        for (let index = 0; index < diagonal1.length; index++) {
            const element = diagonal1[index];
            arrayDiagonal1.push(element.innerHTML)
        }

        let arrayDiagonal2 = [];
        for (let index = 0; index < diagonal2.length; index++) {
            const element = diagonal2[index];
            arrayDiagonal2.push(element.innerHTML)
        }

        const allSame1 = arrayVertical1.every((val, i, arr) => val === arr[0]);
        const hasEmpty1 = arrayVertical1.some((val) => !val);
        if(allSame1 === true && hasEmpty1 === false) {
            alert(side + " win");
        }

        const allSame2 = arrayVertical2.every((val, i, arr) => val === arr[0]);
        const hasEmpty2 = arrayVertical2.some((val) => !val);
        if(allSame2 === true && hasEmpty2 === false) {
            alert(side + " win");
        }

        const allSame3 = arrayVertical3.every((val, i, arr) => val === arr[0]);
        const hasEmpty3 = arrayVertical3.some((val) => !val);
        if(allSame3 === true && hasEmpty3 === false) {
            alert(side + " win");
        }

        const allSame4 = arrayHorizontal1.every((val, i, arr) => val === arr[0]);
        const hasEmpty4 = arrayHorizontal1.some((val) => !val);
        if(allSame4 === true && hasEmpty4 === false) {
            alert(side + " win");
        }

        const allSame5 = arrayHorizontal2.every((val, i, arr) => val === arr[0]);
        const hasEmpty5 = arrayHorizontal2.some((val) => !val);
        if(allSame5 === true && hasEmpty5 === false) {
            alert(side + " win");
        }

        const allSame6 = arrayHorizontal3.every((val, i, arr) => val === arr[0]);
        const hasEmpty6 = arrayHorizontal3.some((val) => !val);
        if(allSame6 === true && hasEmpty6 === false) {
            alert(side + " win");
        }

        const allSame7 = arrayDiagonal1.every((val, i, arr) => val === arr[0]);
        const hasEmpty7 = arrayDiagonal1.some((val) => !val);
        if(allSame7 === true && hasEmpty7 === false) {
            alert(side + " win");
        }

        const allSame8 = arrayDiagonal2.every((val, i, arr) => val === arr[0]);
        const hasEmpty8 = arrayDiagonal2.some((val) => !val);
        if(allSame8 === true && hasEmpty8 === false) {
            alert(side + " win");
        }

        counter++;
    })
    
}