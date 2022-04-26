const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')
    switch (opcao) {
        case 'abacaxi':
       console.log('A opção selecionada vem do Norte.')
       resultado.innerHTML = "A opção selecionada vem do Norte."
        break; 
     case 'laranja':
     console.log('A opção selecionada vem do Centro-Oeste.')
     resultado.innerHTML = "A opção selecionada vem do Centro-Oeste."
     break;
     case 'maçã':
        console.log('A opção selecionada vem do Oeste.')
        resultado.innerHTML = "A opção selecionada vem do Oeste."
        break;
        case 'melancia':
            console.log('A opção selecionada vem do Sul.')
            resultado.innerHTML = "A opção selecionada vem do Sul."
        break;
        case 'morango':
            console.log('A opção selecionada vem do Norte.')
            resultado.innerHTML = "A opção selecionada vem do Norte."
        break;
        case 'pera':
            console.log('A opção selecionada vem do Leste.')
            resultado.innerHTML = "A opção selecionada vem do Leste."
        break;
        case 'uva':
            console.log('A opção selecionada vem do Sudeste.')
            resultado.innerHTML = 'A opção selecionada vem do Sudeste.'
        break;
     default: 
        console.log('Opção inválida.')
        resultado.innerHTML = "Opção inválida."
        break;
    }
}