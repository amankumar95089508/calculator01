let answer = document.querySelector(".answr");
let buttons = document.querySelectorAll(".btn");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.closest(".btn").querySelector("h2").innerText;

        if (buttonText === "=") {
            try {
                
                if (string) {
                    string = eval(string.replace('%', '/100'));
                    answer.innerHTML = string;
                }
            } catch (error) {
                answer.innerHTML = "Error";
            }
        } else if (buttonText === "AC") {
            string = "";
            answer.innerHTML = "Answer";
        } else if (buttonText === "DE") {
            string = string.substring(0, string.length - 1);
            answer.innerHTML = string || "Answer";
        } else {
            string += buttonText;
            answer.innerHTML = string;
        }
    });
});