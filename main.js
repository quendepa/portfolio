let modernSlider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,
});

modernSlider.on('slideChange', function () {
    TweenMax.to('.reveal', .2, {
        y: '-50px',
    })
    TweenMax.to('.swiper-slide', .5, {
        scale: .95,
    })
});


modernSlider.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.reveal', 0, {
        y: '50px',
    })
    TweenMax.to('.reveal', .2, {
        y: 0,
        delay: .5,
    })
    TweenMax.to('.swiper-slide-active .port-text', 0, {
        autoAlpha: 1,
    })
    TweenMax.to('.swiper-slide-next .port-text', 0, {
        autoAlpha: 0,
    })
    
    TweenMax.to('.swiper-slide-prev .port-text', 0, {
        autoAlpha: 0,
    })
    TweenMax.to('.swiper-slide-active', .4, {
        scale: 1,
        ease: Power4.easeOut,
    })
});

TweenMax.to('.swiper-slide-next .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-prev .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
})

TweenMax.to('.swiper-slide', 0, {
    scale: .95,
})


var $slider = $(".slider");
var $slides = $slider.find(".slider-item");
var $navPrev = $(".go-prev");
var $navNext = $(".go-next");
var slidesNum = $slides.length;
var prevSlideID = null;
var currentSlideID = 0;
var isAnimating = false;
var isAutoPlay = false;

function init() {
	TweenLite.set($slides, {
		left: "-100%"
	});
	$navPrev.on("click", gotoPrevSlide);
	$navNext.on("click", gotoNextSlide);
	$startAutoplay.on("click", startAutoPlay);
	$stopAutoplay.on("click", stopAutoPlay);
	gotoSlide(0, 0);
}

function gotoPrevSlide() {
	var slideToGo = currentSlideID - 1;
	if (slideToGo <= -1) {
		slideToGo = slidesNum - 1;
	}
	stopAutoPlay();
	gotoSlide(slideToGo, 1, "prev");
}

function gotoNextSlide() {
	var slideToGo = currentSlideID + 1;
	if (slideToGo >= slidesNum) {
		slideToGo = 0;
	}
	stopAutoPlay();
	gotoSlide(slideToGo, 1, "next");
}

function gotoSlide(slideID, _time, _direction) {
	if (!isAnimating) {
		isAnimating = true;
		prevSlideID = currentSlideID;
		currentSlideID = slideID;
		var $prevSlide = $slides.eq(prevSlideID);
		var $currentSlide = $slides.eq(currentSlideID);
		var time = 1;
		if (_time !== null) {
			time = _time;
		}
		var direction = "next";
		if (_direction != null) {
			direction = _direction;
		}
		if (direction == "next") {
			TweenLite.to($prevSlide, time, {
				left: "-100%"
			});
			TweenLite.fromTo($currentSlide, time, {
				left: "100%"
			}, {
				left: "0"
			});
		} else {
			TweenLite.to($prevSlide, time, {
				left: "100%"
			});
			TweenLite.fromTo($currentSlide, time, {
				left: "-100%"
			}, {
				left: "0"
			});
		}
		TweenLite.delayedCall(time, function() {
			isAnimating = false;
		});
	}
}

function play(){
  gotoNextSlide();
  TweenLite.delayedCall(4, play);
}







// url qui contiendra les repo
const affichage = document.getElementById("api")




//api github
async function github(){
    const url = "https://api.github.com/users/quendepa/repos"
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)

    
    result.forEach(element => {

       const creat = document.createElement("a");

        creat.href = element.html_url;
        creat.textContent = element.name 
        
        
        const list = document.createElement("p")
        

        list.appendChild(creat)
        affichage.appendChild(reveal)

    });
}

  // flèche de direction

    // arrow clicks
    if (document.getElementById("gauche") === "gauche" || document.getElementById("droite") === "droite") {
		Slide = this.id === "droite" ? (Slide += 1) : (Slide -= 1);
  // click on a dot
    } else if (this.className === "dot") {
	activeSlide = this.index;  
	}



  let flècheGauche = document.getElementById("gauche");
  let flècheDroite = document.getElementById("droite");
  let test = document.getElementById("fleche");
	console.log(flècheDroite, flècheGauche, test);

   let redirect = 1 ;

   flècheGauche.addEventListener("click", () => {
	console.log("ok");
	
	if (redirect > 0){

		redirect = redirect-1;
		window.location.href = '#slide'+redirect;
		window.location = document.getElementById('#slide').rediret;

	}
	
  
  });

  flècheDroite.addEventListener("click", () => {
	gotoPrevSlide()

	
	if (redirect <= 3) {
		redirect = redirect+1;
		window.location.href = '#slide'+redirect;
	}
	
  
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
