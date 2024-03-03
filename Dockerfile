FROM node:18.16.0-alpine3.18

RUN npm install -g @angular/cli@16.2.0

WORKDIR /workspace