let prev = document.getElementById('gauche');
let next = document.getElementById('droite');
let allerte = document.getElementById('allerte')
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
    TweenMax.to('.swiper-slide-active .port-text', 0.6, {
        autoAlpha: 1,
    })
    TweenMax.to('.swiper-slide-next .port-text', 0, {
        autoAlpha: 0,
    })
    
    TweenMax.to('.swiper-slide-prev .port-text', 0.8, {
        autoAlpha: 0.8,
    })
    TweenMax.to('.swiper-slide-active', .7, {
        scale: 1,
        ease: Power4.easeOut,
    })
    
    
});

TweenMax.to('.swiper-slide-next .port-text', 0, {
    autoAlpha: 0,
    
})





const alertFunc = () => {
    allerte.style.visibility='hidden';

}
setTimeout(alertFunc,7000);







/* 
next.addEventListener("click", () => {
    console.log(next);

     TweenMax.to('.reveal', .2, {
     y: '-50px',
  })
     TweenMax.to('.swiper-slide', .5, {
       scale: .95,
     })
     TweenMax.to('.swiper-slide', 1, {
       x: '-1500px',
     })

     next.setAttribute("id", "next2");


let next2 = document.getElementById('next2');
next2.addEventListener("click", () => {
   TweenMax.to('.reveal', .2, {
      y: '-50px',
   })
   TweenMax.to('.swiper-slide', .5, {
     scale: .95,
   })
   TweenMax.to('.swiper-slide', 1, {
    x: '-3000px',
   })

    next.setAttribute("id", "next3");

})
})
 
prev.addEventListener("click", () => {
  console.log('gauche');
 
  })

*/



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


