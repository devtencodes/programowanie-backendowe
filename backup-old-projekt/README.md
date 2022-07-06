# Create db using docker command

-   docker run -d -p 27017:27017 --name projekt_mongo -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=mongo -e MONGO_INITDB_DATABASE=mongo_database mongo:latest
