/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// USANDO FUNCTION DECLARATION
function getMultDeclaration(a: number, b: number):number {
    return a * b
}
console.log(getMultDeclaration(3, 3))

// USANDO FUNCTION EXPRESSION
const getMultExpression = function(a: number, b: number):number{ 
    return a * b
}
console.log(getMultExpression(10, 20))

// USANDO ARROW FUNCTION
let getMultArrow = (num1:any, num2:any) => num1 * num2
console.log(getMultArrow(10, 3))

/*
  02
 
  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

// USANDO FUNCTION DECLARATION
function getDivDeclaration(a:number , b:number ):number { return a / b }
console.log(getDivDeclaration(10, 5))

// USANDO FUNCTION EXPRESSION
const getDivExpression = function (a:number, b:number):number { return a / b }
console.log(getDivExpression(20, 5))

// USANDO ARROW FUNCTION
let getDivArrow = (a:any, b:any):number => a / b
console.log(getDivArrow(30, 3))

/*
  03
 
  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().
 
  "Esta é a Xª vez que essa string é exibida."
*/

const textPrinter = function(parameter:string = 'Não passado valor!') {
    console.log(`Esta é a ${parameter}ª vez que essa string é exibida.`)
}
for (let i:number = 0; i < 7; i++) {textPrinter(i + 1)}

/*
  04
 
  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords:string[] = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

let millennialWordsUpperCase:any[] = []
const arrayPrinter:any = array => console.log(array)

for (let i:number = 0; i < millennialWords.length; i++) { millennialWordsUpperCase[i] = millennialWords[i].toUpperCase() }
millennialWordsUpperCase.forEach(arrayPrinter)
/*
  05
 
  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.
 
  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers:number[] = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

const testCountPositive:any = array => {

    let counterPositives:number = 0
    let arraySepPositives:any[] = []

    for (let i:number = 0; i < array.length; i++) {
        if (array[i] > 0) {
            counterPositives++
            arraySepPositives.push(array[i])
        }
    }
    return `O array "randomNumbers" possui ${array.length} números, sendo ${counterPositives}
             positivos e ${array.length + 1 - counterPositives} negativos.`
}

console.log(testCountPositive(randomNumbers))

/*
  06
 
  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

let getOddNumbers = function (array:any) {
    let arrayOdd:any[] = []
    for (let i:number = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) { arrayOdd.push(array[i]) }
    }
    return arrayOdd
}

let arrayRetornado:any = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
arrayPrinter(arrayRetornado)
/*
  07
 
  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
    function () { return 'Plymouth' },
    function () { return 'é' },
    function () { return 'uma' },
    function () { return 'cidade' },
    function () { return 'fantasma' },
    function () { return 'localizada' },
    function () { return 'na' },
    function () { return 'ilha' },
    function () { return 'de' },
    function () { return 'Montserrat,' },
    function () { return 'um' },
    function () { return 'território' },
    function () { return 'ultramarino' },
    function () { return 'do' },
    function () { return 'Reino' },
    function () { return 'Unido' },
    function () { return 'localizado' },
    function () { return 'na' },
    function () { return 'cadeia' },
    function () { return 'de' },
    function () { return 'Ilhas' },
    function () { return 'de' },
    function () { return 'Sotavento' },
    function () { return 'nas' },
    function () { return 'Pequenas' },
    function () { return 'Antilhas,' },
    function () { return 'Índias' },
    function () { return 'Ocidentais.' }
]

let functionsString:string = ''
for (let i:number = 0; i < functions.length; i++) { functionsString += functions[i]() + ' ' }

console.log(functionsString)



/*
  08

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

// function convertToString (value) {
// return String(value)
//}

const convertToString:any = value=> String(value)

let varNumber:number = 15
console.log(convertToString(varNumber))

/*
  09

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/

const counterQteChar:any = strReceived => strReceived.length
console.log("A quantidade contada foi: " + counterQteChar('A String a ser contada.'))

/*
  10

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/

let builderStrLowerCase:any = function (str = '') {
    return str.toLowerCase()
}

let varTest:any = builderStrLowerCase("CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO")
console.log(varTest)

/*
  11

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/

const findIndex= (char:string = '', str:string = '') => {
    for (let i:number = 0; i < str.length; i++) {
        if (str[i] === char) { return i }
    }
}

console.log('O índice foi encontrado na posição: ' + findIndex('a', 'Coca Cola'))
/*
  12

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/

let itemBuscado:string = 'HBOMax'
// let itemBuscado = 'AppleTV'
let streamingNames:string[] = ['Netflix', 'Spotify', 'PrimeVideo', 'Star+', 'HBOMax']
let encontrado:boolean = false

function buscadorNames(item:string = '', array:string[] = []): boolean{
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) { encontrado = true }
    }
    return encontrado
}

console.log("O item buscado está no array? " + (buscadorNames(itemBuscado, streamingNames) ? 'Sim' : 'Não'))

/*
  13

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/

const concatStringsFunction = (str1:string = '', str2:string = '') => str1.concat(str2)
console.log(concatStringsFunction('Está é a parte 01', ' Esta é a parte 02'))

/*
  14

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/

let popadorDeArrays:any = function (array:any) {
    array.pop(array.length)
    return array
}

console.log('Este eh o array antes: ' + streamingNames)
console.log('Este eh o array depois: ' + popadorDeArrays(streamingNames))

/*
  15

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/

const isNullChecker = (valor:any):boolean =>  {
    if (valor === null) {
         return true; 
    }
    else { return false; }
}
// let varNuller:null = null
let varNuller:string = 'High level';

console.log('O valor passado é null? ' + (isNullChecker(varNuller) ? 'Sim' : 'Não'))
/*
  16

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/
const impressoraCB:any = funcPrinterArrayCB =>   {funcPrinterArrayCB()} 

const funcPrinterArrayCB = () => console.log('Teles')

impressoraCB(funcPrinterArrayCB)

//let arrayTestPrinter = ['Calangos', 'Lagartixas', 'Dragões', 'Víboras']
//arrayTestPrinter.forEach(funcPrinterArrayCB)
/*
  17

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/

const callBackFunc = (callback:any, valor:any) => { return callback(valor) }

const triplica:any = numero => numero * 3

console.log(callBackFunc(triplica, 10))

/*
  18
 
  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/

const numbers:number[] = [1, 2, 3]

const logArrayNumbers = (number:any, index:any, array:any) => {
    console.log(`O ${index + 1}º item do array ${array} é ${number}.`)
}

numbers.forEach(logArrayNumbers);

/*
  19
 
  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/

const letters:string[] = ['v', 'e', 'p']
let lettersCopy:any [] = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

letters.forEach(letter => {
    lettersCopy.push(letter);
})
console.log(lettersCopy);
