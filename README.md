# Alura Bank

Respositório para manter projeto baseado nos cursos de TypeScript da plataform Alura.

https://www.alura.com.br/curso-online-typescript-parte1

https://www.alura.com.br/curso-online-typescript-parte2

**Requisitos**

_O compilador do TypeScript utiliza a plataforma Node_

Instalando NodeJS no Ubuntu:

`$ sudo apt-get install -y nodejs
`

Para distribuições Ubuntu com conflitos no pacote node:

`$ sudo ln -s /usr/bin/nodejs /usr/bin/node
`

**Sobre o projeto**

- ECMA Script 2015 ES6 

**Configuração do Typescript**

https://www.npmjs.com/package/typescript

_Criar o arquivo package.json_

`$ npm init
`

_Baixar o TypeScript_

`$ npm install typescript@2.3.2 --save-dev
`

- _Criar arquivo tsconfig.json que dá as diretrizes de compilação dos arquivos ts para js para que o navegador possa interpretar_
- _Adicionar  "compile": "tsc" ao package.json para executar script de complicação localizado na pasta node_modules/typescript/bin_
- _A propriedade "noEmitOnError": true de compilerOptions impede a compilação para js enquanto ouver um erro de sintaxe ts_

**Compilação**

`$ npm run compile
`