# Containerize Node.js Applications

## Objectives:

-   Create a simple Node.js application
-   Create a new Dockerfile which cintains instructions required to build a Nod.js image
-   Run the newly built image as a container
-   Setup a local development environment to connect a database to the container
-   Use Docker Compose to run the Node.js application
-   Configure a CI/CD pipeline for the appliction using Github Actions

## Build Image

    docker build --tag node-docker .

## Run Container

    docker run -d -p 8000:8000 --name rest-server node-docker

## Compose Commands

    docker-compose up -d

    docker-compose down
