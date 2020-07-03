FROM node:11.10.1-alpine

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install @vue/cli -g
