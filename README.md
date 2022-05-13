# RMA - Support Test

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Running the project

To run this project, clone and run the docker-compose command:
```
git clone https://github.com/rankmyapp/support-test
cd support-test
cp app/.env.example app/.env

docker-compose -d --build
```

Don't forget to rename the .env.example file to .env!

After that, the API will be available at [http://localhost:3001](http://localhost:3001) and the web interface will be available at [http://localhost:3000](http://localhost:3000)

PS.: If, for any reason the `MongoDB` container is taking way too long to start, if that happens, please restart the `support-test-node-back-end` container

## Postman

If you want to test the backend via postman, get the collection [here](https://github.com/rankmyapp/support-test/blob/master/support-test.postman_collection.json)

## What was used

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) for container managment
- [Node.js](https://nodejs.org/en/) for backend
  - [Express](http://expressjs.com/pt-br/) as router
- [React](https://reactjs.org/) for the frontend
  - [Create React App](https://github.com/facebook/create-react-app) as boilerplate
  - [Redux](https://redux.js.org/) as state container
- [MongoDB](https://docs.mongodb.com/) as database
- [Redis](https://redis.io/) as cache

# Good to know

You can check the running process as well by tailing the log via:
```bash
docker logs support-test-app -f
docker logs support-test-web -f
```

