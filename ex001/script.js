/*  */

setTimeout(function() {

    document.querySelector('div.loader').style.animation = '500ms loadingout'

}, 3500)

setTimeout(function () {

    document.querySelector('div.loader').style.display = 'none'
                                                
    var date = new Date
    var hours = date.getHours()
    
    var minutes01 = '0' + date.getMinutes()
    var minutes02 = date.getMinutes()
    var minutes = ''

    minutes02 < 10 ? minutes = minutes01 : minutes = minutes02

    var p = document.querySelector('p#p')
    p.style.display = 'flex'

    var body = document.querySelector('body#body')

    var imagens = [document.getElementById('morning'), document.getElementById('afternoon'), document.getElementById('evening')]

    if (hours < 12 && hours > 6) {

        p.innerHTML = `Agora são ${hours}:${minutes} da manhã`
        p.style.left = '40.5%'

        imagens[0].style.display = 'block'
        imagens[1].style.display = 'none'
        imagens[2].style.display = 'none'

        body.style.backgroundColor = 'rgb(209, 181, 87)'

    }

    else if (hours >= 12 && hours < 18) {

        p.innerHTML = `Agora são ${hours}:${minutes} da tarde`
        p.style.left = '40.5%'

        imagens[0].style.display = 'none'
        imagens[1].style.display = 'block'
        imagens[2].style.display = 'none'

        body.style.backgroundColor = 'rgb(110, 73, 42)'

    }

    else {

        p.innerHTML = `Agora são ${hours}:${minutes} da noite`
        p.style.left = '41%'

        imagens[0].style.display = 'none'
        imagens[1].style.display = 'none'
        imagens[2].style.display = 'block'

        body.style.backgroundColor = 'rgb(30, 30, 32)'

    }

    if (hours < 6) {

        p.innerHTML = `Agora são ${hours}:${minutes} da madrugada`
        p.style.left = '39%'

        imagens[0].style.display = 'none'
        imagens[1].style.display = 'none'
        imagens[2].style.display = 'block'

        body.style.backgroundColor = 'rgb(45, 42, 59)'
        
    }

}, 3750)