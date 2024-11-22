const textArea = document.querySelector('#textarea')
const btn = document.querySelector('button')

btn.addEventListener('click',function(){
    textArea.value = ''
})