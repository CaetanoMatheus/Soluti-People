<hr>
<h1 align=center>SOLUTI PEOPLE</h1>
<hr>

## Sobre Soluti People
Soluti People App é uma aplicação web desenvolvida com [Vue.JS](https://vuejs.org/).
Esta aplicação realiza o gerenciamento dos clientes Soluti.

## Back-End
Esta aplicação depende de uma API que pode ser encontrada neste 
[Repositório](https://github.com/CaetanoMatheus/Soluti-People-API).

## Executando com  Docker
Para este caso é preciso que o [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/install/) estejam previamente instalados na máquina.

Na pasta raiz do projeto, basta rodar o comando:
```sh
docker-compose up -d
```

Após executar este comando, a imagem será construida, e o container criado.
Além disso, outras coisas que a aplicação precisa pra funcionar como a instalação dos pacotes do arquivo ``` package.json ``` será feita automaticamente. <br />
Caso queira um retorno do que está sendo feito basta remover a flag ``` -d ``` do comando acima. <br />

#### Acessando a Aplicação
Por padão a aplicação pode ser acessada em:
```sh
http://localhost:8080/
```

#### Executando comandos com NPM
Caso desejado, é possível executar comandos [NPM](https://www.npmjs.com/) dentro do container.
```sh
docker exec -it soluti_people npm install axios
```

Não é necessário que o [NPM](https://www.npmjs.com/) esteja instalado na máquina host pois esta instalação vem do container.

## Executando sem Docker
#### Requisitos
Para executar esta aplicação em uma máquina sem o docker, será preciso que a máquina atenda ao requisitos abaixo.

- [NODE.JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

#### Baixando dependências
Na pasta raiz do projeto, execute o comando abaixo. Este irá baixar todas as dependências do projeto.
```sh
npm install
```

#### Acessando a Aplicação
Por padão a aplicação pode ser acessada em:
```sh
http://localhost:8080/
```
