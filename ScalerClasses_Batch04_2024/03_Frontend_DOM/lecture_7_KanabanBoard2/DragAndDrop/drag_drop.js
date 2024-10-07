// console.log("js");


const containers = document.querySelectorAll(".container");
let draggedBox = null;


containers.forEach((container) => {
    // info whenver drag behaviour starts 
    container.addEventListener("dragstart", (event) => {
        console.log("Drag is started on: ", container);
        draggedBox = event.target;
        // console.log(draggedBox)
    });

    // when you are dragging over a drop point , only triggered when you are in draggable area  
    container.addEventListener("dragover", (event) => {
        // console.log("Dragging is going on: ", event);
        event.preventDefault();
    });

    // drop represent -> when you drop a draggable element in a drop zone
    container.addEventListener("drop", (event) => {
        console.log("Drag is completed on: ", container);
        if (draggedBox) {
            // draggedBox.style.opacity = "1";
            container.appendChild(draggedBox);
            draggedBox = null;
        }
    });



})