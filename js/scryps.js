

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

  $(document).ready(function() {

    $("[data-animation-name]").each(function() {
      var animationAction = $(this).data('action'),
        animationName = "animated " + $(this).data('animation-name'),
        animationName1 = $(this).data('animation-name'),
        animationDelay,
        animationRepeat,
        animationCounter = $(this).data('animation-name');
  
      if ($(this).data('animation-delay') > 0) {
        animationDelay = $(this).data('animation-delay') + "s";
      } else {
        animationDelay = "initial";
      }
  
      if ($(this).data('animation-repeat') > 0) {
        animationRepeat = $(this).data('animation-repeat');
      } else if ($(this).data('animation-repeat') === "infinite") {
        $(this).addClass("infinite");
      } else {
        animationRepeat = "initial";
      }
  
      $(this).css({
        'animation-delay': animationDelay,
        'animation-iteration-count': animationRepeat
      });
  
      if (animationAction === "scroll" && animationName1 !== 'counter') {
        if (!$(this).is(".animate.animated")) {
  
          $(this).each(function() {
            var $this = $(this);
            $this.addClass('hidden');
  
            $(window).scroll(function() {
              var offsetTop = $this.offset().top,
                topOfWindow = $(window).scrollTop() + 400;
  
              if (offsetTop < topOfWindow) {
                $this.removeClass("hidden");
                $this.addClass(animationName);
              } else {
                $this.addClass("hidden");
                $this.removeClass(animationName);
              }
            });
          });
        }
      } else if (animationAction === "click") {
        $(this).click(function() {
          $(this).addClass(animationName).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(this).removeClass(animationName);
          });
        });
      } else {
        $(this).addClass(animationName);
      }
  
      if (animationCounter === 'counter') {
        var $this = $(this),
          countBegin = $(this).text(),
          countEnd = $(this).data('count');
  
        if (animationAction === 'click') {
          $(this).click(function() {
            $({
              countNum: countBegin
            }).animate({
              countNum: countEnd
            }, {
              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
          });
        } else if (animationAction === 'scroll') {
          $(this).each(function() {
            var $this = $(this);
            $this.removeClass('hidden');
  
            $(window).scroll(function() {
              var offsetTop = $this.offset().top - window.innerHeight,
                topOfWindow = $(window).scrollTop();
  
              if (offsetTop > topOfWindow) {
                $({
                  countNum: countBegin
                }).animate({
                  countNum: countEnd
                }, {
                  duration: 2000,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                  }
                });
              }
            });
          });
        } else {
          $({
            countNum: countBegin
          }).animate({
            countNum: countEnd
          }, {
            duration: 4000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        }
      }
    });
  });