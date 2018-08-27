# Alura Bank

Respositório para manter projeto baseado nos cursos de TypeScript da plataform Alura.

https://www.alura.com.br/curso-online-typescript-parte1

https://www.alura.com.br/curso-online-typescript-parte2

**TypeScript**

O TypeScript é um superset da ES2015. Ele adiciona recursos de compilação e tipagem como, por exemplo, validação do código em tempo de compilação.

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
- _Automatizar Processo de Compilação VSCode adicionando ao package.json_


**Type Sscript Definition**

_jQuery TSD_

https://www.npmjs.com/package/@types/jquery

` $ npm install @types/jquery@2.0.42 --save-dev
`

Obs: previne o uso de _declare var $_ que é uma variável global e implicaria no uso do tipo any para declaração de tipos jQuery.


**Lite Server**

` $ npm install lite-server@2.3.0 --save-dev
`


**Concurrently**

` $ npm install concurrently@3.4.0 --save-dev
`


**Compilação**

`$ npm run compile
`

**Compilação assistida do TypeScript**

`$ npm start
`

**RUN**

Acessar pasta app:

_Lite Server_

`$ npm run server
`


_Python_

`$ sudo python -m SimpleHTTPServer 80
`

Acessar no navegador: localhost

_Docker cointainer_ 

`$ docker-compose up
`

**TODO**

- docker-compose