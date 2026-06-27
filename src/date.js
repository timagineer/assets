const yr = document.querySelector('footer time');
if (yr) yr.textContent = new Date().getFullYear().toString().slice(-2);
// <footer>
//     <span>&copy;&apos;<time></time> <a href="https://timagineer.com">Timagineer</a></span>
// </footer>
