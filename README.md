# streem

## prerequisites

 * [Node.js](https://nodejs.org/download/release/latest/)

## setup

```sh
$ npm install
$ npm run build
$ cp .env.default .env
```

Now, edit the `.env` file using your favorite text editor. Set the guild ID, channel ID, and stream URL.

To run the bot, use `npm start` or `node lib/index.js`.

Orchestrate the process using a tool like [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/):

```sh
$ npm install -g pm2
$ pm2 start -n streem lib/index.js
```

## upgrading

To upgrade to the latest version

```sh
$ git pull
$ npm install
$ npm run build
$ pm2 restart streem
```