
let YELLOW_COLOR = "yellow";

window.addEventListener("load", function () {
    let table = this.document.querySelector("#table");
    let N = 8, M = 8;
    player = "rook";

    // chess grid creation.
    // ri: row index, ci: column index
    for (let ri = 0; ri < N; ri++) {
        let tr = this.document.createElement("tr");
        let isWhite = ri % 2 === 0 ? true : false;
        for (let ci = 0; ci < M; ci++) {
            let cell = this.document.createElement("td");
            cell.setAttribute("class", `box ${isWhite ? "white" : "black"}`);
            cell.setAttribute("data-index", `${ri}-${ci}`);

            tr.appendChild(cell);
            isWhite = !isWhite;
        }
        table.appendChild(tr);
    }

    hoverEffect(table, N, M, player);
});


function hoverEffect(table, N, M, player) {
    let boxArr = document.querySelectorAll(".box");
    table.addEventListener("mouseover", (event) => {
        let dataIndex = event.target.dataset.index;
        if (dataIndex === undefined) {
            return;
        }
        // console.log(dataIndex);

        removeYellowColorFromAllCells(boxArr);
        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);

        let directionVector = getDirectionVector(player);
        storageOfPossibleMoves = possibleMoves(parseInt(curr_row), parseInt(curr_col), N, M, directionVector);

        colorMyPossibleMoves(storageOfPossibleMoves, boxArr);
    });

    function removeYellowColorFromAllCells(boxArr) {
        for (let boxCell of boxArr) {
            boxCell.classList.remove(YELLOW_COLOR);
        }
    }
}

function possibleMoves(curr_row, curr_col, N, M, direction) {
    storageOfPossibleMoves = {};

    for (let dir of direction) {
        for (let radius = 0; radius <= Math.max(N, M); radius++) {
            let r = curr_row + (radius * dir[0]);
            let c = curr_col + (radius * dir[1]);

            if (r >= 0 && c >= 0 && r < N && c < M) {
                let dataIndex = `${r}-${c}`;
                storageOfPossibleMoves[dataIndex] = true;
            } else {
                break;
            }
        }
    }

    return storageOfPossibleMoves;
}

function colorMyPossibleMoves(storageOfPossibleMoves, boxArr) {
    for (let boxCell of boxArr) {
        let curr_dataIndex = boxCell.dataset.index;
        if (storageOfPossibleMoves[curr_dataIndex]) {
            boxCell.classList.add(YELLOW_COLOR);
        }
    }
}

function getDirectionVector(player) {
    if (player === "bishop") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1]];
    } else if (player === "queen") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1], [0, 1], [1, 0], [0, -1], [-1, 0]];
    } else if (player === "rook") {
        return [[0, 1], [1, 0], [0, -1], [-1, 0]];
    }else if(player = "knight"){

    }
}

function mouseLeave(table, boxArr) {
    table.addEventListener("mouseleave", () => {
        removeYellowColorFromAllCells(boxArr);
    });
}

