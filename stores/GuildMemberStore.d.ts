import { FluxStore } from '.';
import { GuildMember } from '../general';

export default class GuildMemberStore extends FluxStore {
  getAllGuildsAndMembers(): Record<string, Record<string, GuildMember>>;
  /** @returns Format: [guildId-userId: Timestamp (string)] */
  getCommunicationDisabledUserMap(): Record<string, string>;
  getCommunicationDisabledVersion(): number;
  getKeyedMembers(guildId: string): Record<string, GuildMember>;
  getMember(guildId: string, userId: string): GuildMember;
  getMemberIds(guildId: string): string[];
  getMembers(guildId: string): GuildMember[];
  getNick(guildId: string, userId: string): string;
  getNicknameGuildsMapping(userId: string): Record<string, string[]>;
  getNicknames(userId: string): string[];
  isMember(guildId: string, userId: string): boolean;
  memberOf(userId: string): string[];
  initialize(): void;
}
