import 'dotenv/config';

export const logging = {
  level: process.env.STREEM_LOG_LEVEL || 'info',
  timestampFormat: process.env.STREEM_LOG_TIME_FMT
};

export default {
  logging
};
