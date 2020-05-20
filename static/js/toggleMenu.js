const toggleMenu = () => {
  document.querySelector('#menuLink').classList.toggle('open');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);