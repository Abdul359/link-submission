const showmore1 = document.querySelector(".showmore1")
const showmore2 = document.querySelector(".showmore2")
const showmore3 = document.querySelector(".showmore3")
const showmore4 = document.querySelector(".showmore4")
const showmore5 = document.querySelector(".showmore5")
const showmore6 = document.querySelector(".showmore6")

showmore1.addEventListener("click", () =>{
    const img = showmore1.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden1 = document.querySelector("#hidden1")
    hidden1.classList.toggle("show");
})
showmore2.addEventListener("click", () =>{
    const img = showmore2.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden2 = document.querySelector("#hidden2")
    hidden2.classList.toggle("show");
})
showmore3.addEventListener("click", () =>{
    const img = showmore3.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden3 = document.querySelector("#hidden3")
    hidden3.classList.toggle("show");
})
showmore4.addEventListener("click", () =>{
    const img = showmore4.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden4 = document.querySelector("#hidden4")
    hidden4.classList.toggle("show");
})
showmore5.addEventListener("click", () =>{
    const img = showmore5.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden5 = document.querySelector("#hidden5")
    hidden5.classList.toggle("show");
})
showmore6.addEventListener("click", () =>{
    const img = showmore6.children[0].children[0]
    img.classList.toggle("rotate")
    const hidden6 = document.querySelector("#hidden6")
    console.log(hidden1)
    hidden6.classList.toggle("show");
})