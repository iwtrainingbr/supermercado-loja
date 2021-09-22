document.getElementById('content').innerHTML = pageDashboard();

document.getElementById('navbar').innerHTML = componentNavbar();

document.getElementById('footer').innerHTML = componentFooter()

document.querySelectorAll('[data-component="menu"]').forEach(item => {
  item.addEventListener('click', () => {

    document.title = item.innerHTML;

    resetMenu();
    item.classList.remove('btn-outline-dark');
    item.classList.add('btn-dark');

    document.getElementById('content').innerHTML = routes[item.value]();
  });
});

function resetMenu() {
  document.querySelectorAll('[data-component="menu"]').forEach(item => {
    item.classList.remove('btn-dark');
    item.classList.add('btn-outline-dark');
  });
}
