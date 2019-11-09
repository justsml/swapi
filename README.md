# SWAPI
## The Star Wars API

Source code for [swapi.co](https://swapi.co)

[![Circle CI](https://circleci.com/gh/phalt/swapi.svg?style=svg)](https://circleci.com/gh/phalt/swapi)

For contributing, please see CONTRIBUTING.md

# Run in Docker

## Build

```sh
docker build -t swapi .
```

## Run

**Note:** To run in daemon/background mode, replace `--rm -it` with `--daemon`.

### Dev mode

> With local files mounted inside docker volume.

```sh
docker run --name swapi --rm -it -p 8080:8080 --env-file .env --volume $PWD:/usr/src/app swapi 
```

### Production mode

> With files from `docker build`

```sh
docker run --name swapi --rm -it -p 8080:8080 -e PORT=8080 swapi 
```

