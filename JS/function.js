'use strict'

const contenedorcarruselgrande    = document.querySelector('.contenedorcarruselgrande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -16.66

        contenedorcarruselgrande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})
