
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const mainContainer = document.querySelector(".main_cont");



//========================= Lock and Unlock ========================

function addLockAndUnlock(ticketArea, lockBtn){

    lockBtn.addEventListener("click", () => {
        let isLocked = lockBtn.children[0].classList.contains("fa-lock");

        if(isLocked){
            lockBtn.children[0].classList.remove("fa-lock");
            lockBtn.children[0].classList.add("fa-lock-open");
            ticketArea.setAttribute("contenteditable", true);
        }else{
            lockBtn.children[0].classList.remove("fa-lock-open");
            lockBtn.children[0].classList.add("fa-lock");
            ticketArea.setAttribute("contenteditable", false);
        }
    });
}


//========================= Change color ===========================

function addToggleColor(ticketColorEle){
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

function filterTickets(){
    toolBoxPriorityContainer.addEventListener("click", (event)=>{

    });

    toolBoxPriorityContainer.addEventListener("dblclick", (event)=>{

    });
}




//=========================  Calling methods ===========================

const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
const ticketColorEleList =  mainContainer.querySelectorAll(".ticket-color");

for(let i = 0; i < ticketColorEleList.length;i++){
    addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);

    addToggleColor(ticketColorEleList[i]);
}