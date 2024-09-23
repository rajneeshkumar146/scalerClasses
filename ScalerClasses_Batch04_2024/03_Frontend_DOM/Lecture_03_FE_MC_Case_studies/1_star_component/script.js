/** 
   2. Javascript.
           a. We have to listen to three events.
            i. Click -> Give the rating.
                        Update star upto taht level.
                        Update rating count.
            
            ii. mouseover -> we have to chnage the star upto that level to yellow without chnaging the rating once rating is given.

            Edge case:
            iii. mouseleave: move it gray stars.

 */


const starContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");
let clickedStarIndex = 0;

// Event listeners for click on star.
starContainer.addEventListener("click", (event)=>{
    if(event.target.hasAttribute("idx")){
        clickedStarIndex = event.target.getAttribute("idx");
        fillStarsToYellowUptoIndex(clickedStarIndex);
        countSpan.textContent = clickedStarIndex;
    }
});

// Event Listners for MouseHover.
starContainer.addEventListener("mouseover", (event)=>{
    if(event.target.hasAttribute("idx")){
        currentHoverIndex = event.target.getAttribute("idx");
        fillStarsToYellowUptoIndex(currentHoverIndex);
    }

});

// Event Listners for MouseLeave.
starContainer.addEventListener("mouseleave", (event)=>{
    fillStarsToYellowUptoIndex(clickedStarIndex);
});


// Helper logics.
function fillStarsToYellowUptoIndex(clickedStarIndex){
    restAllStarsToGrayColor();

    for(let currentStarIndex = 0; currentStarIndex < clickedStarIndex; currentStarIndex++){
        starArray[currentStarIndex].classList.add("yellow");
    }
}

function restAllStarsToGrayColor(){
    for(star of starArray){
        star.classList.remove("yellow");
    }
}


