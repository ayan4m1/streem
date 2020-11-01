import Discord from 'discord.js';

import { discord as config } from 'modules/config';
import { getLogger } from 'modules/logging';

export const client = new Discord.Client({
  partials: ['REACTION', 'MESSAGE', 'USER', 'GUILD_MEMBER']
});
const log = getLogger('discord');

export const connectBot = () => {
  if (!config.botToken) {
    return log.error('No bot token, cannot connect to Discord!');
  }

  client.login(config.botToken);
};

export const disconnectBot = () => {
  client.destroy();
};

export const registerHandler = (event, handler) => {
  client.on(event, handler);
};
