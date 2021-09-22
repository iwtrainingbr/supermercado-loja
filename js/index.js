document.getElementById('content').innerHTML = pageDashboard();

document.getElementById('navbar').innerHTML = componentNavbar();

document.getElementById('footer').innerHTML = componentFooter()

document.querySelectorAll('[data-component="menu"]').forEach(item => {
  item.addEventListener('click', () => {

    document.title = item.innerHTML;

    resetMenu();

    if (item.hasAttribute('data-menu-item')) {
      let dataMenuItem = item.getAttribute('data-menu-item');

      document.querySelector(`[data-menu-group="${dataMenuItem}"]`).classList.remove('btn-outline-dark');
      document.querySelector(`[data-menu-group="${dataMenuItem}"]`).classList.add('btn-dark');
    } else {
      item.classList.remove('btn-outline-dark');
      item.classList.add('btn-dark');
    }

    let action = item.getAttribute('data-action');

    document.getElementById('content').innerHTML = routes[action]();
  });
});

function resetMenu() {
  document.querySelectorAll('[data-component="menu"]').forEach(item => {
    item.classList.remove('btn-dark');
    item.classList.add('btn-outline-dark');
  });

  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(item => {
    item.classList.remove('btn-dark');
    item.classList.add('btn-outline-dark');
  });
}
