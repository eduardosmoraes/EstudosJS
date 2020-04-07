function carregar(){ 
var msg = document.getElementById('mensagem')
var img = document.getElementById('imagem')
var data = new Date()
var horas = data.getHours()
//var horas = 18
msg.innerHTML = `Agora são ${horas} horas`
if (horas >= 0 && horas <= 12){
    //console.log ("Agora são ")
    img.src = 'manha.png'
    document.body.style.background = 'rgb(197, 109, 27)'
} else if (horas >=12 && horas < 18){
    //Boa Tarde
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(5, 112, 49)'
} else {
    //Boa Noite
    img.src = 'noite.png'
    document.body.style.background = ' rgb(74, 84, 94)'
}

}