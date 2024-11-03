//var validator = require('validator');
//console.log(validator.isEmail('foo@bar.com'));
import {calcular} from './conta.js'

let quantCombustivel = prompt('Quantidade de combustivel:')

let tipoCombustivel = prompt('Tipo de combustivel:')


let calculado = calcular(quantCombustivel, tipoCombustivel)

alert('Seu carro tem '+ calculado  +' quilometros de autonomia')

