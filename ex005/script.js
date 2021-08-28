const array = []

var txtn = document.querySelector('input#txtn')

var tab = document.querySelector('select#tab')

function adicionar() {

    tab.style.height = '250.5px'

    if (txtn.value.length == 0) {

        alert('[ERRO]')
        
    } else {

        var n = Number(txtn.value)

        var item = document.createElement('option')

        item.innerHTML = ''

        if (n < 100) {

            array.push(n)

            tab.appendChild(item)

            for (n in array) {

                item.text = array[n] + ' adicionado'

            }

        } else {

            alert('[ERRO] Limite atingido')

        }

    }

}

function finalizar() {

    if (txtn.value.length == 0) {

        alert('[ERRO]')

    } else {

        var res = document.querySelector('fieldset#res')
        
        res.style.width = '265px'
        res.innerHTML += ''

        setTimeout(function () {

            res.style.height = '225px'

        // Parte 1

        res.innerHTML += '<br>Números digitados: ' + array.length

        // Parte 2

        var max = Math.max(...array)
        var min = Math.min(...array)

        res.innerHTML += '<br>Maior número: ' + max 
        res.innerHTML += '<br>Menor número: ' + min

        // Parte 3

        var total = 0

        for (i in array) {

            total += array[i]

        }
    
        res.innerHTML += '<br>Soma: ' + total

        // Parte 4

        var media = total / array.length

        res.innerHTML += '<br>Média: ' + media

        }, 500)

    }

}