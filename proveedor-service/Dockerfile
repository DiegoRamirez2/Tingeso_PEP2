FROM openjdk:19
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} proveedor-service.jar
ENTRYPOINT ["java","-jar","/proveedor-service.jar"]