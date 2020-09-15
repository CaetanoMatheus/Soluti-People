<hr>
<h1 align=center>Vue.JS Template</h1>
<hr>

## About Vue.JS Template
Setting up Vue.JS environment is so boring, so a made this template to spare me this repetitive work. :)

## Packages
- [Eslint](https://eslint.org/)
- [Babel plugin root import](https://www.npmjs.com/package/babel-plugin-root-import)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Sass Loader](https://www.npmjs.com/package/sass-loader)
- [Axios](https://www.npmjs.com/package/axios)
- [Unicons](https://iconscout.com/unicons)
- [Jest](https://jestjs.io/)


## Running with Docker
#### Pre-requisites
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/install/)

#### Run the project
After cloning the repository, run the command below at project's root directory. It will build the docker image, create the container and install all dependencies.
```sh
docker-compose up
```

By default it can be accessed at:

```sh
http://localhost:8080/
```

If wanted, you can run commands inside the container.
```sh
docker exec -it vuejs_template npm install axios
```


## Running without Docker
#### Pre-requisites
- [NODE.JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/)

#### Installing dependencies
After cloning the repository, you will have to run one of the commands below at project's root directory.
```sh
npm install
```
or
```sh
yarn install
```

#### Run It
To run the project, you will have to run one of the commands below at project's root directory.
```sh
npm serve
```
or
```sh
yarn serve
```

By default it can be accessed at:

```sh
http://localhost:8080/
```
