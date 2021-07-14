// Declaring DOM Elements
const boxes = document.querySelectorAll('.box')
const btn = document.getElementById('btn')
const copyBtns = document.querySelectorAll('button')

// Adding eventListners
btn.addEventListener('click',main)
copyBtns.forEach(function(btn){
    btn.addEventListener('click',() => {
        input = btn.parentElement.firstElementChild
        console.log(input);
        input.select()
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
    })
})

// Functions to run
main();

// All functions used in the script
function main() {
    boxes.forEach(function(box,num) {
        color = randomColor();
        box.style.backgroundColor = color;
        inputBox = boxes[num].querySelector('input')
        inputBox.value = color;
    })
}
function randomColor() {
    const digits = "1234567890ABCDEF"
    let color = "#"
    for(let i = 0; i <6; i++) {
        color += digits[Math.floor(Math.random() * 16)]
    }
    return color;
}