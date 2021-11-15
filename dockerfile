FROM maven:3.8.3-openjdk-11-slim AS build
WORKDIR /workspace
COPY ../pom.xml /workspace
COPY ../src /workspace/src
RUN mvn -B -f pom.xml clean package -DskipTests

FROM openjdk:11
COPY --from=build /workspace/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8082