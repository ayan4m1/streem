import 'dotenv/config';

export const azuracast = {
  url: process.env.STREEM_AZURACAST_URL
};

export const discord = {
  botToken: process.env.STREEM_DISCORD_BOT_TOKEN,
  guildId: process.env.STREEM_DISCORD_GUILD_ID,
  channelId: process.env.STREEM_DISCORD_CHANNEL_ID
};

export const logging = {
  level: process.env.STREEM_LOG_LEVEL || 'info',
  timestampFormat: process.env.STREEM_LOG_TIME_FMT
};

export const stream = {
  url: process.env.STREEM_STREAM_URL,
  restartInterval:
    parseInt(process.env.STREEM_STREAM_RESTART_INTERVAL, 10) || 60 * 60 * 1000
};

export default {
  azuracast,
  discord,
  logging,
  stream
};
