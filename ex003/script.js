function mouseenter() {

    document.querySelector('div.button').style.animation = '1s rotate'

}

function mouseout() {

    document.querySelector('div.button').style.animation = 'none'

}

function contar() {

    var sv = [document.querySelector('input#inputInicio'), document.querySelector('input#inputFim'), document.querySelector('input#inputPasso')]
    var nv = [Number(sv[0].value), Number(sv[1].value), Number(sv[2].value)]

    if (sv[0, 1, 2].value.length == 0) {

        alert('[ERRO]')

    } else {

        var res = document.querySelector('div#res')

        if (nv[2] == 0) {

            alert('[ERRO]')

            p = 1

        }

        if (nv[0] < nv[1]) {

            for (var i = nv[0]; i <= nv[1]; i += nv[2]) {

                res.innerHTML += `${i} \u{1F449}`

            }

        }

        else if (nv[0] > nv[1]) {

            for (var i = nv[0]; i >= nv[1]; i -= nv[2]) {

                res.innerHTML += `${i} \u{1F449}`

            }

        }

        res.innerHTML += ` \u{1F3C1}`

    }

}