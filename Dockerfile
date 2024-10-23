FROM node:lts-alpine3.12

RUN apk add python3 build-base

WORKDIR /usr/src

ADD . /usr/src

RUN npm ci

CMD ["node", "src/index.js"]
