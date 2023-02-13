const grid = document.getElementById("grid");

const n    = parseInt(localStorage.getItem("n"), 10);
const m    = parseInt(localStorage.getItem("m"), 10);
const bc   = localStorage.getItem("baseColor");

let arr    = Array(n).fill().map(() => Array(m).fill(0));
let currentRow = Math.floor(Math.random() * n);
let currentCol = Math.floor(Math.random() * m);

console.log(bc);
// Inicializar el array y tabla
for (let i = 0; i < n; i++) {
    let row = grid.insertRow();
    for (let j = 0; j < m; j++) {
        let cell = row.insertCell();
        cell.innerHTML = arr[i][j];
    }
}
// Navegación con teclas
document.onkeydown = function(event) {
    let row = currentRow;
    let col = currentCol;
    switch (event.key) {
        case "ArrowUp":
            row--;
            break;
        case "ArrowDown":
            row++;
            break;
        case "ArrowLeft":
            col--;
            break;
        case "ArrowRight":
            col++;
            break;
        default:
            break;
    }
    // Revisar si el item se encuentra en los límites.
    if (row < 0) {
        row = n - 1;
    }else if (row >= n) {
        row = 0;
    }
    if(col < 0) {
        col = m - 1;
    }else if (col >= m) {
        col = 0;
    }
    currentRow = row;
    currentCol = col;
    // Colorear de acuerdo a la intensidad calculada.
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let r = (currentRow + i + n) % n;
            let c = (currentCol + j + m) % m;
            arr[r][c]++;
            if (arr[r][c] > 9) {
                arr[r][c] = 0;
            }
            let intensity = 255 - arr[r][c] * 25;
            if(arr[r][c] >= 5){
                grid.rows[r].cells[c].style.color = "white";
            }else{
                grid.rows[r].cells[c].style.color = "black";
            }
            grid.rows[r].cells[c].style.backgroundColor =
            "rgb(" + intensity + "," + (intensity - 15) + "," + "250" + ")";
            grid.rows[r].cells[c].innerHTML = arr[r][c];
        }
    }
};