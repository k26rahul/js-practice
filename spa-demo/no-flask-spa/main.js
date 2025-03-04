function showActivePage() {
  let activePage = location.hash.slice(1);

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.querySelector(`#page-${activePage}`).classList.add('active');
}

window.addEventListener('hashchange', () => {
  showActivePage();
});

showActivePage();
