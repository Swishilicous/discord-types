import {
  User,
  Guild,
  Member,
  Channel,
  Message,
  MessageJSON,
} from './general';

export class UserStore {
  filter(filter: () => boolean, sort?: boolean): Record<string, User>;
  findByTag(username: string, discriminator: string): User;
  forEach(action: Function): void;
  getCurrentUser(): User;
  getUser(userId: string): User;
  getUsers(): Record<string, User>;
  initialize(): void;
}

/* The real name is GuildMember//GuildMemberStore but it's shortened here for convenience */
export class MemberStore {
  getAllGuildsAndMembers(): Record<string, Record<string, Member>>;
  /** @returns Format: [guildId-userId: Timestamp (string)] */
  getCommunicationDisabledUserMap(): Record<string, string>;
  getCommunicationDisabledVersion(): number;
  getKeyedMembers(guildId: string): Record<string, Member>;
  getMember(guildId: string, userId: string): Member;
  getMemberIds(guildId: string): string[];
  getMembers(guildId: string): Member[];
  getNick(guildId: string, userId: string): string;
  getNicknameGuildsMapping(userId: string): Record<string, string[]>;
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
  getInitialOverlayState(): Record<string, Channel>;
  getMutableGuildAndPrivateChannels(): Record<string, Channel>;
  getMutableGuildChannels(): Record<string, Channel>;
  getMutableGuildChannelsByGuild(): Record<string, Record<string, Channel>>;
  getMutablePrivateChannels(): Record<string, Channel>;
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
  getGuilds(): Record<string, Guild>;
}

export class MessageStore {
  getMessage(channelId: string, messageId: string): Message;
  /** @guh This return object is fucking huge; I'll type it later. */
  getMessages(channelId: string): unknown;
  /** Not full message objects; uses MessageJSON type. */
  getRawMessages(channelId: string): Record<string | number, MessageJSON>;
  hasCurrentUserSentMessage(channelId: string): boolean;
  hasPresent(channelId: string): boolean;
  isLoadingMessages(channelId: string): boolean;
  jumpedMessageId(channelId: string): string | undefined;
  whenReady(e: unknown, callback: Function): void;
  initialize(): void;
}