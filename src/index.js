import get from 'simple-get';
import { promisify } from 'util';

import { azuracast, discord, stream } from 'modules/config';
import { client, connectBot, registerHandler } from 'modules/discord';
import { getLogger } from 'modules/logging';

const log = getLogger('app');
const getPromise = promisify(get);

const updatePresence = () =>
  get.concat(
    {
      url: `${azuracast.url}api/nowplaying`,
      json: true
    },
    (err, _, data) => {
      if (err) {
        log.error(err.message);
        log.error(err.stack);
        return;
      }

      const [firstStation] = data;
      const {
        station: { name: stationName },
        live,
        now_playing: nowPlaying
      } = firstStation;

      log.info('Updating presence');
      if (live && live.is_live) {
        client.user.setPresence({
          activity: {
            name: `${live.streamer_name} on ${stationName}`,
            type: 'LISTENING'
          },
          status: 'online'
        });
      } else {
        client.user.setPresence({
          activity: {
            name: `${nowPlaying.song.artist} - ${nowPlaying.song.title}`,
            type: 'LISTENING'
          },
          status: 'online'
        });
      }

      let syncDuration = 60000;

      if (nowPlaying && nowPlaying.duration > 0) {
        syncDuration = nowPlaying.remaining * 1e3 + 5e3;
      }

      log.info(`Next presence update in ${syncDuration / 1e3} seconds`);
      setTimeout(updatePresence, syncDuration);
    }
  );

const startStream = async () => {
  try {
    const guild = client.guilds.resolve(discord.guildId);
    const channel = guild.channels.resolve(discord.channelId);

    const voiceConnection = await channel.join();
    const httpStream = await getPromise(stream.url);

    updatePresence();
    voiceConnection.play(httpStream);
  } catch (error) {
    log.error(error.message);
    log.error(error.stack);
    return startStream();
  }
};

registerHandler('ready', startStream);

connectBot();
