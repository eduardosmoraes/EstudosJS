/*var v = 80
console.log(`The speed of your car are: ${v}km/h.`)

if (v > 60){ // Simple condition
    console.log('You have exceeded the speed of the road. Fined!');
}

console.log('Always wear your seat belt.');


////////////////////////////////////////////////////////////////////


var country = "Canada"
console.log(`living in: ${country}.`)
if (country == 'Brasil'){
    console.log("You are Brazilian")
} else {
    console.log("You are foreign")
}


/////////////////////////////////////////////////////////////////////



var age = 67
console.log(`You age is: ${age}`)
if (age < 16){
    console.log("don`t vote")
} else if (age < 18 || age > 65 ){
    console.log('optional vote')
} else {
    console.log('compulsory vote')
}


/////////////////////////////////////////////////////////////////////




var hora = 6
console.log(`Agora sao: ${hora}`)
if (hora < 12 && hora > 5){
    console.log('Bom Dia!')
} else if(hora < 18 && hora > 12){
    console.log('Boa tarde!')
} else if (hora > 18){
    console.log('Boa noite!')
} else{
    console.log('Boa madrugada!')
}*/

//pegar a hora do sistema que estiver rodando o script
var now = new Date
var hora = now.getHours()
console.log(`Agora sao: ${hora}`)
if (hora < 12 && hora > 5){
    console.log('Bom Dia!')
} else if(hora < 18 && hora > 12){
    console.log('Boa tarde!')
} else if (hora > 18){
    console.log('Boa noite!')
} else{
    console.log('Boa madrugada!')
}
