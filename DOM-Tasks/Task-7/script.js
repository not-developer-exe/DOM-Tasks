var btn = document.querySelector('button')
btn.addEventListener('click', function(){
    var box = document.querySelector('#box')

    let currentWidth = box.offsetWidth; 
    let currentHeight = box.offsetHeight;

    box.style.width = `${currentWidth + 10}px`
    box.style.height = `${currentHeight + 10}px`
})