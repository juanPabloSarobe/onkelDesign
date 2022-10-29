

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
      document.querySelector('#logoFace').classList.remove('colorDark');
      document.querySelector('#logoFace').classList.add('colorLigth');
      document.querySelector('#logoInsta').classList.remove('colorDark');
      document.querySelector('#logoInsta').classList.add('colorLigth');
      
    } else if(y == currentY) {
        document.querySelector('#customNavbar').classList.remove('navbar-dark', 'bg-dark', 'fixed-theme');
      document.querySelector('#customNavbar').classList.add('navbar-light', 'bg-opacity-10', 'fixed-theme'); 
      document.querySelector('#logoNavbar').classList.remove('logoLigth');
      document.querySelector('#logoNavbar').classList.add('logoDark');
      document.querySelector('#logoFace').classList.remove('colorLigth');
      document.querySelector('#logoFace').classList.add('colorDark');
      document.querySelector('#logoInsta').classList.remove('colorLigth');
      document.querySelector('#logoInsta').classList.add('colorDark');
    }
  }
  
  // Ejecuta la funcion en cualquier momento por si no se inicia la web en el top
  scrollable();