const doramas = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja conselho de dorama por categoria? S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias indicadas:')
    console.log("Suspense", "/ Romance", "/ Terror", "/ Comedia")

    const entradaCategoria = readline.question('Qual categoria escolhe?')

    const retorno = doramas.filter(doramas => doramas.Categoria === entradaCategoria)

    console.table(retorno)
}
else{
    const doramasOrdenados = doramas.sort()
    console.log ('Esses são os doramas indicados')
    console.table(doramasOrdenados)
}