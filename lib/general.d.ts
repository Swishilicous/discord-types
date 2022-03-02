export type UserList = { [user: string]: User; };
export type ChannelList = { [channelId: string]: Channel; };
export type GuildList = { [guildId: string]: Guild; };
export type RoleList = { [roleId: string]: Role; };

export class User {
  constructor (user: object);
  accentColor: unknown;
  avatar: string;
  banner: string;
  bio: string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: string | undefined;
  flags: number;
  guildMemberAvatars: { [guild: string]: string; };
  id: string;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: boolean | undefined;
  phone: string | undefined;
  premiumType: number | undefined;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;

  get createdAt(): Date;
  get hasPremiumPerks(): boolean;
  get tag(): string;
  get usernameNormalized(): string;

  addGuildAvatarHash(guildId: string, avatarHash: string): User;
  getAvatarSource(guildId: string, canAnimate?: boolean): { uri: string; };
  getAvatarURL(guildId?: string, t?: unknown, canAnimate?: boolean): string;
  hasAvatarForGuild(guildId: string): boolean;
  hasDisabledPremium(): boolean;
  hasFlag(flag: number): boolean;
  hasFreePremium(): boolean;
  hasHadSKU(e: unknown): boolean;
  hasPremiumUsageFlag(flag: number): boolean;
  hasPurchasedFlag(flag: number): boolean;
  hasUrgentMessages(): boolean;
  isClaimed(): boolean;
  isLocalBot(): boolean;
  isNonUserBot(): boolean;
  isPhoneVerified(): boolean;
  isStaff(): boolean;
  isSystemUser(): boolean;
  isVerifiedBot(): boolean;
  removeGuildAvatarHash(guildId: string): User;
  toString(): string;
}

export interface Member {
  avatar: string | undefined;
  banner: string | undefined;
  bio: string;
  colorString: string;
  communicationDisabledUntil: string | undefined;
  fullProfileLoadedTimestamp: number;
  guildId: string;
  hoistRoleId: string;
  iconRoleId: string;
  isPending: boolean | undefined;
  joinedAt: string | undefined;
  nick: string | undefined;
  premiumSince: string | undefined;
  roles: string[];
  userId: string;
}

export class Channel {
  constructor (channel: object);
  application_id: number | undefined;
  bitrate: number;
  defaultAutoArchiveDuration: number | undefined;
  flags: number;
  guild_id: string;
  icon: unknown;
  id: string;
  lastMessageId: string;
  lastPinTimestamp: string | undefined;
  member: unknown;
  memberCount: number | undefined;
  memberIdsPreview: string[] | undefined;
  memberListId: unknown;
  messageCount: number | undefined;
  name: string;
  nicks: { [unknown: string]: unknown; };
  nsfw: boolean;
  originChannelId: unknown;
  ownerId: string;
  parent_id: string;
  permissionOverwrites: {
    [role: string]: {
      id: string;
      type: number;
      deny: bigint;
      allow: bigint;
    };
  };
  position: number;
  rateLimitPerUser: number;
  rawRecipients: {
    id: string;
    avatar: string;
    username: string;
    public_flags: number;
    discriminator: string;
  }[];
  recipients: string[];
  rtcRegion: unknown;
  threadMetadata: {
    locked: boolean;
    archived: boolean;
    invitable: boolean;
    createTimestamp: string | undefined;
    autoArchiveDuration: number;
    archiveTimestamp: string | undefined;
  };
  topic: string;
  type: number;
  userLimit: number;
  videoQualityMode: undefined;

  get accessPermissions(): bigint;
  get lastActiveTimestamp(): number;

  computeLurkerPermissionsAllowList(): unknown;
  getApplicationId(): unknown;
  getGuildId(): string;
  getRecipientId(): unknown;
  hasFlag(flag: number): boolean;
  isActiveThread(): boolean;
  isArchivedThread(): boolean;
  isCategory(): boolean;
  isDM(): boolean;
  isDirectory(): boolean;
  isForumChannel(): boolean;
  isGroupDM(): boolean;
  isGuildStageVoice(): boolean;
  isGuildVoice(): boolean;
  isListenModeCapable(): boolean;
  isManaged(): boolean;
  isMultiUserDM(): boolean;
  isNSFW(): boolean;
  isOwner(): boolean;
  isPrivate(): boolean;
  isSystemDM(): boolean;
  isThread(): boolean;
  isVocal(): boolean;
}

export class Guild {
  constructor (guild: object);
  afkChannelId: string | undefined;
  afkTimeout: number;
  applicationCommandCounts: { [key: number]: number; };
  application_id: unknown;
  banner: string | undefined;
  defaultMessageNotifications: number;
  description: string | undefined;
  discoverySplash: string | undefined;
  explicitContentFilter: number;
  features: Set<string>;
  hubType: unknown;
  icon: string | undefined;
  id: string;
  joinedAt: Date;
  maxMembers: number;
  maxVideoChannelUsers: number;
  mfaLevel: number;
  name: string;
  nsfwLevel: number;
  ownerId: string;
  preferredLocale: string;
  premiumProgressBarEnabled: boolean;
  premiumSubscriberCount: number;
  premiumTier: number;
  publicUpdatesChannelId: string | undefined;
  roles: RoleList;
  rulesChannelId: string;
  splash: string;
  systemChannelFlags: number;
  systemChannelId: string;
  vanityURLCode: null;
  verificationLevel: number;

  get acronym(): string;

  getApplicationId(): unknown;
  getIconSource(size: string | number, canAnimate: boolean): { uri: string; };
  getIconURL(size: string | number, canAnimate: boolean): string;
  getMaxEmojiSlots(): number;
  getRole(roleId: string): Role;
  hasFeature(feautre: string): boolean;
  hasVerificationGate(): boolean;
  isLurker(): boolean;
  isNew(newerThanDays?: number): boolean;
  isOwner(user: User): boolean;
  isOwnerWithRequiredMfaLevel(user: User): boolean;
  toString(): string; // override that is identical to Guild.name
}

export interface Role {
  color: number;
  colorString: string | undefined;
  hoist: boolean;
  icon: string | undefined;
  id: string;
  managed: boolean;
  mentionable: boolean;
  name: string;
  originalPosition: number;
  permissions: bigint;
  position: number;
  tags: { // I'm sure there are more.
    bot_id: string;
    integration_id: string;
    premium_subscriber: unknown;
  } | undefined;
  unicodeEmoji: string | undefined;
}