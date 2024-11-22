const follower = document.querySelector('#follower')

document.addEventListener('mousemove', function(e){
    
    const followerX = e.clientX
    const followerY = e.clientY

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`
})