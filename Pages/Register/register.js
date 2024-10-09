// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 2; // Start from page 2 since first page is flipped
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}


function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                setTimeout(() => {
                    paper3.style.zIndex = 3;
                }, 500); // Adjust delay as needed (500ms in this case)
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 2) {
        switch (currentLocation) {
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                // Revert z-index of #p3 back to 1 when prev is clicked
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }
}
