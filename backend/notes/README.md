# easynote - notes microservice

## to build

./gradlew build  
docker build --build-arg JAR_FILE=build/libs/\*.jar -t easynote/notes .  

## to run  
docker-compose up -d  
or  
docker run -p 8080:8080 easynote/notes