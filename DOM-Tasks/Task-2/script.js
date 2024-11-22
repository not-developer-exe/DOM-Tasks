var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    btn.innerHTML = 'Clicked!'
})

btn.addEventListener('mouseout', function(){
    btn.innerHTML = 'Click Me'
})