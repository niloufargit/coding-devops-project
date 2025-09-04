FROM openjdk:17
VOLUME /tmp
EXPOSE 8081
ARG JAR_FILE=target/coding-devops-book-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} coding-devops-book-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/coding-devops-book-0.0.1-SNAPSHOT.jar"]