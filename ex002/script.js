function verificar() {

    document.querySelector('div.loader').style.display = 'block'

    setTimeout(function() {

        document.querySelector('div.loader').style.animation = '500ms loadingout'

    }, 3000)

    setTimeout(function () {

        var date = new Date
        var ano = date.getFullYear()

        var fano = document.querySelector('input#dn')
        var res = document.querySelector('div#res')

        if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1903) {

            alert('[ERRO]')

        } else {
            
            var fsex = document.getElementsByName('radsex')
            var genero = ''

            var idade = ano - Number(fano.value)

            var img = document.createElement('img')
            img.style.width = '180px'
            img.style.position = 'relative'
            img.style.top = '-27.5vh'

            if (fsex[0].checked) {

                genero = 'um homem'

                if (idade >= 0 && idade <= 12) {

                    img.setAttribute('src', 'Imagens/foto-bebe-m.png') 

                } else if (idade < 30 && idade > 12) {

                    img.setAttribute('src', 'Imagens/foto-jovem-m.png') 

                    img.style.width = '160px'

                } else if (idade < 60 && idade >= 30) {

                    img.setAttribute('src', 'Imagens/foto-adulto-m.png') 

                } else {

                    img.setAttribute('src', 'Imagens/foto-idoso-m.png') 

                }
                
            }

            if (fsex[1].checked) {

                genero = 'uma mulher'

                if (idade >= 0 && idade <= 12) {

                    img.setAttribute('src', 'Imagens/foto-bebe-f.png') 

                } else if (idade < 30 && idade > 12)  {

                    img.setAttribute('src', 'Imagens/foto-jovem-f.png') 

                    img.style.width = '160px'
                    img.style.top = '-26.8vh'

                } else if (idade < 60 && idade >= 30) {

                    img.setAttribute('src', 'Imagens/foto-adulto-f.png') 

                } else {

                    img.setAttribute('src', 'Imagens/foto-idoso-f.png') 

                }
                
            }

            res.innerHTML = `Detectamos ${genero} de ${idade} anos`
            res.appendChild(img)

        }

    }, 3350)

}