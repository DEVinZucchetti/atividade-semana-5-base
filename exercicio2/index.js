
    let h1 = document.querySelector(".titulo")
    let input = document.querySelector(".input")
    let botao = document.querySelector(".botao")
    let botao2 = document.querySelector(".botao2")
    let status = document.querySelector(".status")
    let maior = document.querySelector(".max")
    let menor = document.querySelector(".min")
    let array = document.querySelector(".array")

    let lista = [];

    const procuraMinMax = function () {
        lista.push(parseFloat(input.value))

        let listaOrdem = lista.sort()
        console.log(listaOrdem)

        let primeiro = Math.min(...listaOrdem)
        let ultimo = Math.max(...listaOrdem)


        maior.innerHTML = `O maior valor é ${ultimo}`
        menor.innerHTML = `O menor valor é ${primeiro}`
        array.innerHTML = `[${listaOrdem}]`
        input.value = ''
    }

