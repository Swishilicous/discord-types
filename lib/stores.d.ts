import { Store } from 'flux/utils';
import {
  User,
  Guild,
  Member,
  Channel,
  Message,
} from './general';

export class UserStore extends Store<unknown> {
  filter(filter: () => boolean, sort?: boolean): Record<string, User>;
  findByTag(username: string, discriminator: string): User;
  forEach(action: Function): void;
  getCurrentUser(): User;
  getUser(userId: string): User;
  getUsers(): Record<string, User>;
  initialize(): void;
}

/* The real name is GuildMember//GuildMemberStore but it's shortened here for convenience */
export class MemberStore extends Store<unknown> {
  getAllGuildsAndMembers(): Record<string, Record<string, Member>>;
  /** @format guildId-userId: Timestamp (number) */
  getCommunicationDisabledUserMap(): (string | undefined)[];
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

export class ChannelStore extends Store<unknown> {
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

export class SelectedStore extends Store<unknown> {
  getChannelId(e?: unknown): string;
  getLastChannelFollowingDestination(): unknown;
  getLastSelectedChannelId(): string;
  getMostRecentSelectedTextChannelId(e: unknown): unknown;
  getVoiceChannelId(): string | undefined;
  initialize(): void;
}

export class GuildStore extends Store<unknown> {
  getGuild(guildId: string): Guild;
  getGuildCount(): number;
  getGuilds(): Record<string, Guild>;
}

export class MessageStore extends Store<unknown> {
  getMessage(channelId: string, messageId: string): Message;
  /** @guh This return object is fucking huge; I'll type it later. */
  getMessages(channelId: string): unknown;
  /** @note Not full message objects; they only have a couple properties on them. */
  getRawMessages(channelId: string): Record<string | number, Message>;
  hasCurrentUserSentMessage(channelId: string): boolean;
  hasPresent(channelId: string): boolean;
  isLoadingMessages(channelId: string): boolean;
  jumpedMessageId(channelId: string): string | undefined;
  whenReady(e: unknown, callback: Function): void;
  initialize(): void;
}