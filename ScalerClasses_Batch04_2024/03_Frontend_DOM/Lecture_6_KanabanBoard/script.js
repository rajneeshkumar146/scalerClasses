
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const mainContainer = document.querySelector(".main_cont");
const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

//========================= Lock and Unlock ========================

function addLockAndUnlock(ticketArea, lockBtn) {

    lockBtn.addEventListener("click", () => {
        let isLocked = lockBtn.children[0].classList.contains("fa-lock");

        if (isLocked) {
            lockBtn.children[0].classList.remove("fa-lock");
            lockBtn.children[0].classList.add("fa-lock-open");
            ticketArea.setAttribute("contenteditable", true);
        } else {
            lockBtn.children[0].classList.remove("fa-lock-open");
            lockBtn.children[0].classList.add("fa-lock");
            ticketArea.setAttribute("contenteditable", false);
        }
    });
}


//========================= Change color ===========================

function addToggleColor(ticketColorEle) {
    let colors = ["pink", "blue", "purple", "green"];
    ticketColorEle.addEventListener("click", (event) => {
        const currentColor = event.target.classList[1];
        let idx = colors.indexOf(currentColor);
        let nextIdx = (idx + 1) % colors.length;

        event.target.classList.remove(currentColor);
        event.target.classList.add(colors[nextIdx]);
    });
}

//========================= Filter tickets ===========================

function filterTickets() {
    toolBoxPriorityContainer.addEventListener("click", (event) => {
        // console.log(event.target, event.currentTarget);
        if (event.target === event.currentTarget) {
            return;
        }

        const selectedColor = event.target.classList[1];
        const ticketArray = document.querySelectorAll(".ticket-cont");

        for (ticket of ticketArray) {
            const currentColor = ticket.querySelector(".ticket-color").classList[1];
            if (currentColor !== selectedColor) {
                ticket.style.display = "none";
            } else {
                ticket.style.display = "block";
            }
        }



    });

    toolBoxPriorityContainer.addEventListener("dblclick", (event) => {
        const ticketArray = document.querySelectorAll(".ticket-cont");
        for (ticket of ticketArray) {
            ticket.style.display = "block";
        }
    });
}

//========================= Delete feature ===========================

function deleteListner(ticketContainer) {
    ticketContainer.addEventListener("click", () => {
        if (removeBtn.style.color === "red") {
            ticketContainer.remove();
        }
    });
}

function deleteBtnEventListener() {
    removeBtn.addEventListener("click", () => {
        if (removeBtn.style.color !== "red") {
            removeBtn.style.color = "red";
        } else {
            removeBtn.style.color = "";
        }
    });
}


//========================= Modal and ticket creation ===========================
function modalCreation() {
    const modal = document.querySelector(".modal-cont");
    const priorityColorSetModal = modal.querySelector(".priority-color-cont");
    const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

    addBtnEventListner(modal);
    deleteBtnEventListener();
    activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal);
    createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal);
}

function addBtnEventListner(modal) {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    addBtn.addEventListener("dblclick", () => {
        modal.style.display = "none";
    });
}

function activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal) {
    priorityColorSetModal.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            return;
        }

        event.target.classList.add("active");
    })
}

function resetActiveStatusOfColorModal(priorityColorArrayOfModal) {
    for (priorityColor of priorityColorArrayOfModal) {
        priorityColor.classList.remove("active");
    }
}


function createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal) {
    modal.addEventListener("keypress", (event) => {
        if (event.key !== "Enter") {
            return;
        }

        let textArea = modal.querySelector(".textarea-cont");
        let writtenContent = textArea.value;

        // get the selected Color at the time of creation of modal.
        let selectedColor = "green";
        for (priorityColor of priorityColorArrayOfModal) {
            if (priorityColor.classList.contains("active")) {
                selectedColor = priorityColor.classList[1];
                break;
            }
        }

        const id = uid();
        buildTicketWithAllFeatures(writtenContent, selectedColor, true, id);

        textArea.value = "";
        modal.style.display = "none";
        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
    });
}

function buildTicketWithAllFeatures(writtenContent, selectedColor, isLocked, currentId) {
    if (writtenContent === "") {
        return;
    }

    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.innerHTML =
        `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${currentId}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock"><i class="fa-solid ${lockOrUnlock}"></i></div>`;

    mainContainer.appendChild(ticketContainer);

    // attach other features like lock-unlock, toggle color etc.,

    // Lock-Unlock
    const ticketArea = ticketContainer.querySelector(".ticket-area");
    const lockBtn = ticketContainer.querySelector(".lock-unlock");
    addLockAndUnlock(ticketArea, lockBtn);


    // Toggle color
    const ticketColorrEle = ticketContainer.querySelector(".ticket-color");
    addToggleColor(ticketColorrEle);

    // Delete Event Listner.
    deleteListner(ticketContainer);
}



//=========================  Testing purpose only: Calling methods ===========================

const ticketContainerList = mainContainer.querySelectorAll(".ticket-cont");
const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
const ticketColorEleList = mainContainer.querySelectorAll(".ticket-color");

for (let i = 0; i < ticketContainerList.length; i++) {
    deleteListner(ticketContainerList[i]);
    addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);
    addToggleColor(ticketColorEleList[i]);
}

filterTickets();
// deleteBtnEventListener();
modalCreation();