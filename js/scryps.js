

window.onscroll = function() {
    // Llama a la funcion al hacer scroll
    scrollable();
  }
  
  function scrollable() {
    var y = 0;
    var currentY = window.pageYOffset;
    
    if (y < currentY) {
      document.querySelector('#customNavbar').classList.remove('navbar-light', 'bg-opacity-10', 'fixed-theme');
      document.querySelector('#customNavbar').classList.add('navbar-dark', 'bg-dark', 'fixed-theme');
      document.querySelector('#logoNavbar').classList.remove('logoDark');
      document.querySelector('#logoNavbar').classList.add('logoLigth');
    } else if(y == currentY) {
        document.querySelector('#customNavbar').classList.remove('navbar-dark', 'bg-dark', 'fixed-theme');
      document.querySelector('#customNavbar').classList.add('navbar-light', 'bg-opacity-10', 'fixed-theme'); 
      document.querySelector('#logoNavbar').classList.remove('logoLigth');
      document.querySelector('#logoNavbar').classList.add('logoDark');
    }
  }
  
  // Ejecuta la funcion en cualquier momento por si no se inicia la web en el top
  scrollable();