// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })


const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    // console.log(question);
    const buttons = document.querySelector(".question-btn");
    // console.log(buttons);
    buttons.addEventListener("click", function () {
        questions.forEach(function (elem) {
            console.log(elem);
            // if (elem !== question) {
            //     elem.classList.remove("show-text");
            // }
        });
        question.classList.toggle("show-text");
    });
});