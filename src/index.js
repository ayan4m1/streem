import get from 'simple-get';
import { promisify } from 'util';

import { discord, stream } from 'modules/config';
import { client, connectBot, registerHandler } from 'modules/discord';

const getPromise = promisify(get);

registerHandler('ready', async () => {
  const guild = client.guilds.resolve(discord.guildId);
  const channel = guild.channels.resolve(discord.channelId);

  const voiceConnection = await channel.join();
  const httpStream = await getPromise(stream.url);

  voiceConnection.play(httpStream);
});

connectBot();
