  // DOM
  
    var btn = window.document.getElementById('ham');
    var menu = window.document.getElementById("menu");
    var overlay = document.getElementById('overlay');
    var learning = document.getElementById('learn');
    var begin = document.getElementById('beg');
    var benefits = document.getElementById('bene');
  
  // Event
  
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('active');
      overlay.classList.add("active");
    }, false);

// Header scroll

    var a = document.getElementById("header_active")
      , e = !0;
    window.addEventListener("scroll", function() {
        e && (window.pageYOffset > 0 ? a.classList.add("active") : a.classList.remove("active"))
    });

		// Menu

    var navMenu = document.getElementsByClassName('js-site-nav')[0];
    var isMouseDown = false;

    navMenu.addEventListener('mousedown', function() {
    isMouseDown = true;  
    });

    navMenu.addEventListener('mouseup', function() {
    isMouseDown = false;  
    });

    navMenu.addEventListener('mouseleave', function() {
    isMouseDown = false;  
    });

    navMenu.addEventListener('blur', function() {
    if (!isMouseDown) {
				navMenu.classList.remove('active');
				overlay.classList.remove("active");
    }
		}, true);
		
		overlay.addEventListener('click', function() {
			navMenu.classList.remove('active');
			overlay.classList.remove("active");
  }, true);
  
  // menu jumping

  var header_ht = document.querySelector('.header_main');

    learning.addEventListener('click',function() {
      scroll(0,0);
      var head_ht = header_ht.offsetHeight;
      console.log(head_ht)
      if(window.innerWidth < 768){
        window.scrollTo(0,380);
      }
      else {
        window.scrollTo(0,head_ht);
      }
      navMenu.classList.remove('active');
      overlay.classList.remove("active");
    })

    benefits.addEventListener('click',function() {
      scroll(0,0)
      var lear_ht = document.getElementById('learning');
      if(window.innerWidth < 768){
        var x = lear_ht.offsetHeight + 380;
      }
      else {
        var x = lear_ht.offsetHeight + header_ht.offsetHeight;
      }
      window.scrollTo(0,x);
      navMenu.classList.remove('active');
      overlay.classList.remove("active");
    })

    begin.addEventListener('click',function() {
      scroll(0,0)
      var benefit_ht = document.getElementById('benefits');
      var lear_ht = document.getElementById('learning');
      if(window.innerWidth < 768){
        var y = benefit_ht.offsetHeight + lear_ht.offsetHeight + 380;
      }
      else {
        var y = benefit_ht.offsetHeight + lear_ht.offsetHeight + header_ht.offsetHeight;
      }
      window.scrollTo(0,y);
      navMenu.classList.remove('active');
      overlay.classList.remove("active");
    })
