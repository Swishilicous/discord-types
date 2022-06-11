import { FluxStore } from '.';
import { Guild } from '../general';

export default class GuildStore extends FluxStore {
  getGuild(guildId: string): Guild;
  getGuildCount(): number;
  getGuilds(): Record<string, Guild>;
}
