const sidebar = document.querySelector('#sidebar');
const toggleOpen = document.querySelector('#toggle-btn-open');

toggleOpen.addEventListener('click', function () {
   sidebar.classList.toggle('active');
});