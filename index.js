var elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('duvida-aberta')
    })
})

//* function nome(argumento) {Conteúdo da função} */
