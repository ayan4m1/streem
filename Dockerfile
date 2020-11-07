FROM node:current-alpine3.12

RUN apk add python3 build-base

WORKDIR /usr/src

ADD . /usr/src

RUN npm ci && npm run build

CMD ["node", "lib/index.js"]
