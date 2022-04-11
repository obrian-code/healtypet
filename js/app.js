//ACTIVAR EL AOS

AOS.init({
    duration: 2000
})

//Navegation Menu

let bar_icon = document.querySelector('.bar-icon')
let nav = document.querySelector('.nav')
let enlaces = document.querySelector('.container-list')

let contador = true

let options=document.querySelectorAll('li a')

//BOTONES DEL MENU

options.forEach(element => {

    element.addEventListener('click',function () {
        animacion_menu()
    })

})

//FUNCION PARA ANIMAR EL MENU

function animacion_menu() {

    bar_icon.classList.toggle('active')

    if (contador == true) {
    
    enlaces.style.display="flex"
    contador = false
    document.body.style.overflow = 'hidden'
     
   }else{
   
    enlaces.style.display="none";
    document.body.style.overflow = 'auto'
    contador = true
   
    }

}

// ICON DEL MENU 

bar_icon.addEventListener('click', function(){
  animacion_menu()
});


//ANIMACION DE SCROLL DE LOS background

   let animations=['#about','#team','#contact']

   animations.forEach(element => {
    
    window.addEventListener('scroll',function () {
        
        let posicionObj= document.querySelector(''+element+'').getBoundingClientRect().top
        let tamñoPan=this.window.innerHeight/4
            
            if (element=="#about") {
            
                if (posicionObj<tamñoPan) {
        
                    setTimeout(() => {
                    document.querySelector(''+element+'').style.backgroundImage= "url('./img/about.png')"
                    }, 1500)

                }else{
                    
                    document.querySelector(''+element+'').style.backgroundImage= "url()"
            
                }

            }

            if (element=="#team") {

                if (posicionObj<tamñoPan) {

                    setTimeout(() => {
                    document.querySelector(''+element+'').style.backgroundImage= "url('./img/services.png')"
                    }, 1200)

                }else{

                    document.querySelector(''+element+'').style.backgroundImage= "url()"

                }

            }

            if (element=="#contact"){

                    if (posicionObj<tamñoPan) {

                        setTimeout(() => {
                        document.querySelector(''+element+'').style.
                        backgroundImage= "url('./img/contact.png')"
                        }, 1000)

                    }else{
                        
                        document.querySelector(''+element+'').style.backgroundImage= "url()"
                    
                    }
                
            }
        
    })
   });
