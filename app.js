let boxes = document.querySelectorAll('.box')
let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    boxes.forEach(function(box) {
        box.style.backgroundColor = randomColor();
    })
})
boxes.forEach(function(box) {
    box.style.backgroundColor = randomColor();
})

function randomColor() {
    const digits = "1234567890ABCDEF"
    let color = "#"

    for(let i = 0; i <6; i++) {
        color += digits[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}