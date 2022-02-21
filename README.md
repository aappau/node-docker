# Node.js Application on Docker [![CI to Docker Hub](https://github.com/aappau/node-docker/actions/workflows/main.yml/badge.svg)](https://github.com/aappau/node-docker/actions/workflows/main.yml)

-   Create a simple Node.js application
-   Create a new Dockerfile which contains instructions required to build a Node.js image
-   Run the newly built image as a container
-   Setup a local development environment to connect a database to the container
-   Use Docker Compose to run the Node.js application
-   Configure a CI/CD pipeline for the appliction using Github Actions

## Build Image

    npm run build-image

## Start Development Environment

    npm run up

## Shut Down Development Environment

    npm run down

## Run Test

    npm run test
