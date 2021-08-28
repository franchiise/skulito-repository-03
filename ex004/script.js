function mouseenter() {

    document.querySelector('div.button').style.animation = '1s rotate'

}

function mouseout() {

    document.querySelector('div.button').style.animation = 'none'

}

function calcular() {

    var txtn = document.querySelector('input#n')
    var tab = document.querySelector('select#tab')

    if (txtn.value.length == 0) {

        alert('[ERRO]')

    } else {

        var n = Number(txtn.value)
        var c = 1

        tab.innerHTML = ''

        while (c <= 10) {

            var option = document.createElement('option')
            option.text = `${n} x ${c} = ${n * c}`

            tab.appendChild(option)

            c++

        }

    }

}