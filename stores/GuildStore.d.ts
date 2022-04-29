import { Guild } from '../general';

export default class GuildStore {
  getGuild(guildId: string): Guild;
  getGuildCount(): number;
  getGuilds(): Record<string, Guild>;
}
