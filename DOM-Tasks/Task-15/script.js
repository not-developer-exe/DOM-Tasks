const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');


openModalButton.addEventListener('click', function () {
  modal.style.display = 'flex'; 
});


closeModalButton.addEventListener('click', function () {
  modal.style.display = 'none'; 
});


window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});
