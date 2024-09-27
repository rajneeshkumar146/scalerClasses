window.addEventListener("load", function () {
    let table = this.document.querySelector("#table");
    let N = 8, M = 8;

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

    hoverEffect(table, N, M);
});


function hoverEffect(table, N, M) {

    table.addEventListener("mouseover", (event) => {
        let dataIndex = event.target.dataset.index;
        if (dataIndex === undefined) {
            return;
        }
        // console.log(dataIndex);

        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);
        

    })

}

