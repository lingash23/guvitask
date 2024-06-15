const textarea = document.createElement ("textarea");
const para = document.createElement ("p");
const span = document.createElement ("span");
span.innerText = "0";
para.innerText = "Enter Text length;";
para.appendChild (span);
textarea.setAttribute("pleaceholder", "enter message");
document.body.append(...[textarea, para]);

textarea.addEventListener ("input", (e) => {
    span.innerText = e.target.value.length;
})
