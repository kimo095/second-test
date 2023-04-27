alert("hello welcome to our website");
const information = prompt("please provide your name and email for future information");
// const info = document.getElementById("data");
// info.textContent = "Thank you for your information";

var questions = document.getElementsByClassName("question");

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.querySelector(".answer");
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
