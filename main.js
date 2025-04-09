// getting the UI constants to manipulate
const plusBtn = document.querySelectorAll(".plus-btn");
const answerContainer = document.querySelectorAll(".answer-container");

// intiating the loop and buttons and DOM manipulation
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function () {
        if (answerContainer[i].style.display === "none") {
            answerContainer[i].style.display = "block";
            plusBtn[i].src = "./assets/images/icon-minus.svg"
        } else {
            answerContainer[i].style.display = "none";
            plusBtn[i].src = "./assets/images/icon-plus.svg"
        }
    });
}


