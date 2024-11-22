var btn = document.querySelector('button')


btn.addEventListener('click', function(){
    var box = document.querySelector('#box')
    const currentWidth = window.innerWidth
    const currentHeight = window.innerHeight

    const randomWidth = Math.floor(Math.random() * (currentWidth - 100))
    const randomHeight = Math.floor(Math.random() * (currentHeight - 100))

    box.style.left = `${randomWidth}px`
    box.style.top = `${randomHeight}px`
})