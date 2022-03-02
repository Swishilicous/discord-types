import {
  User,
  Guild,
  Member,
  Channel,
  UserList,
  GuildList,
  ChannelList,
} from './general';

export class UserStore {
  filter(filter: () => boolean, sort?: boolean): UserList;
  findByTag(username: string, discriminator: string): User;
  forEach(action: Function): void;
  getCurrentUser(): User;
  getUser(userId: string): User;
  getUsers(): UserList;
  initialize(): void;
}

/* The real name is GuildMember//GuildMemberStore but it's shortened here for convenience */
export class MemberStore {
  getAllGuildsAndMembers(): { [guild: string]: { [user: string]: Member; }; };
  getCommunicationDisabledUserMap(): (string | undefined)[]; /* format: guildId-userId: Timestamp */
  getCommunicationDisabledVersion(): number;
  getKeyedMembers(guildId: string): { [guild: string]: Member; };
  getMember(guildId: string, userId: string): Member;
  getMemberIds(guildId: string): string[];
  getMembers(guildId: string): Member[];
  getNick(guildId: string, userId: string): string;
  getNicknameGuildsMapping(userId: string): { [nickname: string]: string[]; };
  getNicknames(userId: string): string[];
  isMember(guildId: string, userId: string): boolean;
  memberOf(userId: string): string[];
  initialize(): void;
}

export class ChannelStore {
  getAllThreadsForParent(channelId: string): Channel[];
  getChannel(channelId: string): Channel;
  getDMFromUserId(userId: string): string;
  getDMUserIds(): string[];
  getGuildChannelsVersion(guildId: string): number;
  getInitialOverlayState(): ChannelList;
  getMutableGuildAndPrivateChannels(): ChannelList;
  getMutableGuildChannels(): ChannelList;
  getMutableGuildChannelsByGuild(): { [guildId: string]: ChannelList; };
  getMutablePrivateChannels(): ChannelList;
  getPrivateChannelsVersion(): number;
  getSortedPrivateChannels(): Channel[];
  hasChannel(channelId: string): boolean;
  initialize(): void;
}

export class SelectedStore {
  getChannelId(e?: unknown): string;
  getLastChannelFollowingDestination(): unknown;
  getLastSelectedChannelId(): string;
  getMostRecentSelectedTextChannelId(e: unknown): unknown;
  getVoiceChannelId(): string | undefined;
  initialize(): void;
}

export class GuildStore {
  getGuild(guildId: string): Guild;
  getGuildCount(): number;
  getGuilds(): GuildList;
}