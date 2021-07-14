let boxes = document.querySelectorAll('.box')
let btn = document.getElementById('btn')

btn.addEventListener('click',main)

main();

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