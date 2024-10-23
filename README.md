# streem

## prerequisites

- [Node.js](https://nodejs.org/download/release/latest/)

## setup

```sh
$ npm install -g @ayan4m1/streem
$ wget https://raw.githubusercontent.com/ayan4m1/streem/refs/heads/main/.env.default
$ mv .env.default .env
```

Now, edit the `.env` file using your favorite text editor. Set the guild ID, channel ID, and stream URL.

To run the bot, use `npm start` or `node src/index.js`.

Orchestrate the process using a tool like [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/):

```sh
$ npm install -g pm2
$ pm2 start -n streem src/index.js
```

## upgrading

To upgrade to the latest version

```sh
$ git pull
$ npm ci
$ pm2 restart streem
```

## docker

If you'd like to use Docker to run the bot, simply do the following:

1. Copy `.env.default` to `.env` and edit the settings
2. Run `docker-compose up` or `docker-compose up -d` to start the bot
