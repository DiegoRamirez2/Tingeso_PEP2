FROM openjdk:19
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} acopio-service.jar
ENTRYPOINT ["java","-jar","/acopio-service.jar"]