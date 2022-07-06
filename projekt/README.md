#Create db using docker command

-   docker run -d -p 27017:27017 --name mongo_database -e MONGO_INITDB_DATABASE=mongo_database mongo:latest
