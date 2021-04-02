// Navbar sticky
$(window).scroll(function() {
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky", window.scrollY > 4);
});

// ScrollSpy
// SMOOTH SCROLLING PLUS OFFSET FOR FIXED NAV
$('.navbar li a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.on('click', function(event) {   

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 65
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
            if (history.pushState) {
                history.pushState(null, null, hash); 
            } else {
                window.location.hash = hash;
            } 
        });
        return false;    
    } // End if
});

// Parallax

// On Load
$(window).on('load', function() {
  $('.jumbotron .jumboLoad, .card')
      .addClass('onLoad');
});


// Scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  // Jumbotron
  if (window.matchMedia("(min-width: 992px)").matches) {

    $('.jumbotron img').css({
      'transform' : 'translateY('+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
      'transform' : 'translateY('+ wScroll/1.2 +'%)'
    });

    $('.jumbotron p').css({
      'transform' : 'translateY('+ wScroll/0.7 +'%)'
    });
    
  } 

  // Progress-bar & AboutMe
  if(wScroll > $('.aboutMe').offset().top - 450) {
    $('.aboutMe .titleAbout').addClass('onLoad');
    $('.progress .progress-bar').removeClass('progHapus');
  }


  // Tools (Mobile)
  if(wScroll > $('.toolsM').offset().top - 550) {
    $('.toolsM-img').each(function(i) {
      setTimeout(function() {
        $('.toolsM-img').eq(i).addClass('onLoad');
      }, 300 * (i+1));
    })
  }


  // Portofolio
  if(wScroll > $('.titlePorto').offset().top - 450) {
    $('.portoBox').each(function(i) {
      setTimeout(function() {
        $('.portoBox').eq(i).addClass('onLoad');
      }, 300 * (i+1));
    })
  }

  // nav active
  if(wScroll > $('.jumbotron').offset().top - 250) {
    $('.navActive1').addClass('active');
    $('.navActive2, .navActive3, .navActive4').removeClass('active');
  }
  if(wScroll > $('.carousel').offset().top - 200) {
    $('.navActive2').addClass('active');
    $('.navActive1, .navActive3, .navActive4').removeClass('active');
  }
  if (wScroll > $('.aboutMe').offset().top - 220) {
    $('.navActive3').addClass('active');
    $('.navActive1, .navActive2, .navActive4').removeClass('active');
  }
  if (wScroll > $('.titlePorto').offset().top - 120) {
    $('.navActive4').addClass('active');
    $('.navActive1, .navActive2, .navActive3').removeClass('active');
  }

});

// Bootstrap
$(document).ready(function(){
  $('.carousel').carousel({
      interval: 3500,
      pause: false
  });
});

// Slick Slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true
      });
});

  
