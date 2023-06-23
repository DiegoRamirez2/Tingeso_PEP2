FROM openjdk:19
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} pagos-service.jar
ENTRYPOINT ["java","-jar","/pagos-service.jar"]