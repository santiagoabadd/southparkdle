FROM openjdk:21-jdk-slim
ARG JAR_FILE=target/soutparkdle-0.0.1.jar
COPY ${JAR_FILE} app_soutparkdle.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app_soutparkdle.jar"]