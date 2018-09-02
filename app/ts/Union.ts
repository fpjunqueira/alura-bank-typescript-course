// Exemplo de uso de Union Types, Type Guards e Alias

// alias MeuToken para guardar Union Type string | number
type MeuToken = string |  number;

function processaToken(token: MeuToken) {

    // Type Guard
    if(typeof(token) === 'string') {
        // tipo string é inferido e autocomplete funciona
        return token.replace(/2/g,'X');
    } else {
        // tipo number é inferido e autocomplete funciona
        return token.toFixed().replace(/2/g,'X');
    }

}

// código compila
const tokenProcessado1 = processaToken('1234');
const tokenProcessado2 = processaToken(1234);
